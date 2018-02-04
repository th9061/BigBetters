const lib = require('lib')({token: process.env.STDLIB_TOKEN});

const ephemeral = require('../../utils/ephemeral.js');

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
  var days = text.substring(0, indexOf(" "));
  text = text.substring(indexOf(" "));

  var dollars = text.substring(0, indexOf(" "));
  text = text.substring(indexOf(" "));

  callback(null, {
    text: `Hello, <@${user}>...\nYou said: ${text}`,
    attachments: [
      // You can customize your messages with attachments.
      // See https://api.slack.com/docs/message-attachments for more info.
    ]
  });
};
