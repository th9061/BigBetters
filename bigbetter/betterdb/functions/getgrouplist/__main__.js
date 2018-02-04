const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const db = require('../../helpers/db.js');

/**
* Retrieves channel information
* @returns {object}
*/
module.exports = (context, callback) => {

  db.getGroups((err, value) => {
    if (value == null) {
      callback(err, {});
    }
    callback(err, value);
  });

};
