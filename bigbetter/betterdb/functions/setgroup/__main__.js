const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const db = require('../../helpers/db.js');

/**
* Sets channel information
* @param {string} channel the ID of the slack channel
* @param {object} value the object to be stored
* @returns {object}
*/
module.exports = (channel = '', value = {}, context, callback) => {

  db.setGroup(channel, value, (err, value) => {
    callback(err, value);
  });

};
