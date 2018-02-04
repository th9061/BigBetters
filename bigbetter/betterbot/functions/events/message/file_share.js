const lib = require('lib')({token: process.env.STDLIB_TOKEN});

/**
* file_shared event
*
*   See https://api.slack.com/events-api for more details.
*
* @param {string} user The user id of the user that invoked this event (name is usable as well)
* @param {string} channel The channel id the event was executed in (name is usable as well)
* @param {string} text The text contents of the event
* @param {object} event The full Slack event object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, text = '', event = {}, botToken = null, callback) => {
  var group;
  // callback(null, { text: `Congratulations <@${user}>! You have completed your goal :sunglasses:` });
  
  // HANDLING GROUP
  lib.bigbetter.betterdb['@dev'].getgroup(channel, (err, value) => {

    if (err) { callback(err); }
    group = value;

    // If the channel, and user are being tracked
    if (Object.keys(group).length != 0 &&
      Object.keys(group.users[user]['bet']).length != 0) { // If channel is being tracked

      if (!group.users[user]['bet']['complete']) {

        group.users[user]['bet']['complete'] = true;
        var bet_name = group.users[user]['bet']['description'];

        lib.bigbetter.betterdb['@dev'].setgroup(channel, group, (err, value) => {
          if (err) { callback(err); }

          callback(null, {
            text: `Congratulations <@${user}>! You have completed your goal :sunglasses:`,
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

        });

      }

    }

  });

};
