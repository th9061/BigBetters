const lib = require('lib')({token: process.env.STDLIB_TOKEN});

const db = require('../../helpers/db.js');
const fetch_user = require('../../utils/get_user.js');

/**
* /newbet
*
*   New bet Command made by user
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

  params = text.split(" ");
  if (params.length < 3) {
    callback(null, {
      text: `You need 3 parameters`,
      attachments: [
        // SHOW THE CREATED BET
        // You can customize your messages with attachments.
        // See https://api.slack.com/docs/message-attachments for more info.
      ]
    });
  }
  time_left = parseFloat(params[0]);
  bet_amount = parseFloat(params[1]);
  description = params.slice(2).join(' ');

  lib.bigbetter.betterdb['@dev'].getgroup(channel, (err, value) => {

    if (err) { callback(err); }

    var group = value;
    if (Object.keys(group).length == 0) {
      group = {
        name: '',
        payoutOption: 'split',
        currentBets: {},
        pastBets: []
      }
    }

    // If user already has bet
    if (group.currentBets.hasOwnProperty(user) && group.currentBets[user]) {
      callback(null, {
        text: `You already have a current bet, ${user}`,
        attachments: [
          // SHOW THE CREATED BET
          // You can customize your messages with attachments.
          // See https://api.slack.com/docs/message-attachments for more info.
        ]
      });

    } else { 
      fetch_user(user, (err, user_info) => {
        // Sets bet
        if (err) {
          callback(err);
        }

        const hr_to_ms = 3600000;
        group.currentBets[user] = {
          'info': user_info,
          'deadline': Date.now() + time_left * hr_to_ms,
          'amount': bet_amount,
          'description': description
        }

        lib.bigbetter.betterdb['@dev'].setgroup(channel, group, (err, value) => {
          if (err) { callback(err); }

          callback(null, {
            text: `Bet created! ${JSON.stringify(value)} ${user} ${channel}`,
            attachments: [
              // SHOW THE CREATED BET
              // You can customize your messages with attachments.
              // See https://api.slack.com/docs/message-attachments for more info.
            ]
          });
        })
      })
    }
  });
};
