const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const fetch_user = require('../../../utils/get_user.js');

/**
* channel_join event
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

  // HANDLING GROUP
  lib.bigbetter.betterdb['@dev'].getgroup(channel, (err, value) => {

    if (err) { callback(err); }

    group = value;
    if (Object.keys(group).length != 0) { // If channel is being tracked

      fetch_user(userID, (err, user_info) => {
        if (err) { callback(err); }

        var u_data = user_info.user;
        group.users[userID] = {
          'name': u_data.profile.real_name,
          'pic':u_data.profile.image_48,
          'bet': {},
          'owing': 0
        };

        lib.bigbetter.betterdb['@dev'].setgroup(channel, group, (err, value) => {
          if (err) { callback(err); }
          welcome();
        });

      });

    } else {
      welcome();
    }

  });

  function welcome () {
    callback(null, {
      text: `Hello <@${user}>, welcome to <#${channel}>! :relaxed:`
    });
  }

};
