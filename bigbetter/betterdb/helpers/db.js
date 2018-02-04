/**
  StdLib Storage Utility for Slack

  Using your StdLib Library Token, connect to `utils.storage` (key-value storage)
  and save team identity data (bot access token, etc.) for future reference.
*/

const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const CACHE = {};

function groupsURL () {
  return `SLACK::${process.env.SLACK_APP_NAME}::groups`;
};

function formatGroupKey(groupId) {
  return `SLACK::${process.env.SLACK_APP_NAME}::${groupId}`;
};

module.exports = {
  getGroups: (callback) => {
    lib.utils.storage.get(groupsURL(), (err, value) => {
      if (value == null) {
        callback(err, {});
      }
      callback(err, value);
    });
  },
  setGroup: (groupID, value, callback) => {
    lib.utils.storage.set(formatGroupKey(groupID), value, (err, value) => {
      if (!err) {
        CACHE[groupID] = value;
      }

      lib.utils.storage.get(groupsURL(), (err, groupsList) => {
        if (groupsList == null) {
          groupsList = {};
        }

        if (groupsList[groupID]) {
          callback(err, value);

        } else {

          groupsList[groupID] = groupID;
          
          lib.utils.storage.set(groupsURL(), groupsList, (err, groups) => {
            callback(err, value);
          });

        }
      });
    });
  },
  getGroup: (groupID, callback) => {
    if (CACHE[groupID]) {
      return callback(null, CACHE[groupID]);
    }
    lib.utils.storage.get(formatGroupKey(groupID), (err, value) => {
      if (!err) {
        CACHE[groupID] = value;
      }
      callback(err, value);
    });
  },
  clearGroup: (groupID, callback) => {    
    CACHE[groupID] = {};
    var formatted_id = formatGroupKey(groupID);
    lib.utils.storage.clear(formatted_id, (err, result) => {
      callback(err, result);
    })
  }
};
