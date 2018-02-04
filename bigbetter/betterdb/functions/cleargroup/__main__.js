const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const db = require('../helpers/db.js');

/**
* Clears a group
* @param {string} channel channel to clear
* @returns {string}
*/

module.exports = (channel = '', context, callback) => {

  db.clearGroup(channel, (err, value) => {
    callback(err, value);
  });
};
