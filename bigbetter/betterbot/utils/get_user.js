/**
  Slack Message Utility

  Sends a message as your bot user, provided the appropriate bot token.
  For full documentation see: https://api.slack.com/methods/chat.postMessage
*/

const request = require('request');

module.exports = (user, callback) => {

  request.get({
    uri: 'https://slack.com/api/users.info',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    qs: {
      token: process.env.SLACK_TOKEN,
      user: user
    }
  }, (err, result) => {

    if (err) {
      return callback(err);
    }

    let body;
    try {
      body = JSON.parse(result.body);
    } catch (e) {
      body = {}
    }

    if (!body.ok) {
      return callback(new Error(body.error ? `Slack Error: ${body.error}` : 'Invalid JSON Response from Slack'));
    }

    callback(null, body);

  });

};
