const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const async = require('async');

const fetch_user = require('../../utils/get_user.js');
const fetch_channel = require('../../utils/get_channel.js');

/**
* /newbet
*   Handles command by user to create a bet
*
*   See https://api.slack.com/slash-commands for more details.
*
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {string} text The text contents of the command
* @param {object} command The full Slack command object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, text = '', command = {}, botToken = null, callback) => {

  // PARSE INPUT
  params = text.split(" ");
  if (params.length < 3) {
    callback(null, { text: `You need 3 parameters` });
  }

  days = parseFloat(params[0]);
  bet_amount = parseFloat(params[1]);
  description = params.slice(2).join(' ');

  var group;

  // HANDLING GROUP
  lib.bigbetter.betterdb['@dev'].getgroup(channel, (err, value) => {

    if (err) { callback(err); }

    group = value;
    if (Object.keys(group).length == 0) { // INIT NEW CHANNEL

      fetch_channel(channel, (err, body) => {
        if (err) {
          callback(err);
        }

        var data = body.channel;
        group = {
          name: data.name,
          users: {},
          payoutOption: 'split'
        }

        async.each(data.members, (userID, cb) => { // Initializes users

          fetch_user(userID, (err, user_info) => {
            if (err) { callback(err); }

            var u_data = user_info.user;
            group.users[userID] = {
              'name': u_data.profile.real_name,
              'pic':u_data.profile.image_48,
              'bet': {},
              'owing': 0
            };

            cb();
          });

        }, (err) => {
          if (err) { callback(err); }
          addBet();
        });
      });

    } else { addBet(); }

    function addBet () {

      if (Object.keys(group.users[user]['bet']).length == 0) { // Add new bet
        
        const day_to_ms = 86400000;
        group.users[user]['bet'] = {
          'start_date': Date.now(),
          'deadline': Date.now() + days * day_to_ms,
          'amount': bet_amount,
          'description': description,
          'complete': false
        }

        lib.bigbetter.betterdb['@dev'].setgroup(channel, group, (err, value) => {
          if (err) { callback(err); }

          callback(null, {
            text: `Bet created. Good luck!`,
            attachments: [{
              'color': 'good',
              'fallback': 'Bet information',
              'author_name': group.users[user]['name'],
              'title': group.users[user]['bet']['description'],
              'title_link': process.env.FRONTEND_URL + 'social/' + channel,  
              'text': '$' + group.users[user]['bet']['amount'] + "\n" + process.env.FRONTEND_URL + 'social/' + channel,
              "ts": group.users[user]['bet']['deadline']/1000
            }]
          });
        })

      } else { // Bet already exists

        callback(null, {
          text: `You already have a current bet, <@${user}> ${channel}`,
          attachments: [{
            'color': 'good',
            'fallback': 'Bet information',
            'author_name': group.users[user]['name'],
            'title': group.users[user]['bet']['description'],
            'title_link': process.env.FRONTEND_URL + 'social/' + channel,  
            'text': '$' + group.users[user]['bet']['amount'] + "\n" + process.env.FRONTEND_URL + 'social/' + channel,
            "ts": group.users[user]['bet']['deadline']/1000
          }]
        });

      }
    }
    
  });
};
