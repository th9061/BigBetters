/**
  StdLib Storage Utility for Slack

  Using your StdLib Library Token, connect to `utils.storage` (key-value storage)
  and save team identity data (bot access token, etc.) for future reference.
*/

const lib = require('lib')({token: process.env.STDLIB_TOKEN});

function formatGroupKey(groupId) {
  return `SLACK::${process.env.SLACK_APP_NAME}::${groupId}`;
};

const CACHE = {};

// FOR THE CRON JOBS!!!!!!
function addGroupToList (groupID, callback) {
  // 
}

module.exports = {
  setGroup: (groupID, value, callback) => {
    lib.utils.storage.set(formatGroupKey(groupID), value, (err, value) => {
      if (!err) {
        CACHE[groupID] = value;
      }
      callback(err, value);
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
  }
};
