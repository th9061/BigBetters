/**
* A basic Hello World function
* @param {string} name Who you're saying hello to
* @returns {string}
*/

const db = require('../helpers/db.js');

module.exports = (channel = '', context, callback) => {

  db.clearGroup(channel, (err, value) => {
    callback(err, value);
  });
};
