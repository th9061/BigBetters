const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const db = require('../../helpers/db.js');

/**
* Retrieves channel information
* @param {string} channel the ID of the slack channel
* @returns {object}
*/
module.exports = (channel = '', context, callback) => {

  db.getGroup(channel, (err, value) => {
    if (value == null) {
      callback(err, {});
    }
    callback(err, value);
  });

};
