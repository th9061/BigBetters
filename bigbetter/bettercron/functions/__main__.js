const lib = require('lib')({token: process.env.STDLIB_TOKEN});
const async = require('async');

/**
* A basic Hello World function
* @returns {object}
*/
module.exports = (context, callback) => {
  lib.bigbetter.betterdb['@dev'].getgrouplist((err, channels) => {

    async.each(channels, (channel_id, cb) => { // Update each channel


      lib.bigbetter.betterdb['@dev'].getGroup(channel_id, (err, group) => {
        var flag = false;

        async.eachOf(group.users, (usr_val, usr_id, cb2) => { // Update the group

          if (Object.keys(group.users[usr_id]['bet']).length != 0) {
            if (group.users[usr_id]['bet']['deadline'] < Date.now()) { // deadline over
              flag = true;
              if (!group.users[usr_id]['bet']['complete']) {
                group.users[usr_id]['owing'] += group.users[usr_id]['bet']['amount'];
              }
              group.users[usr_id]['bet'] = {};
            }
          }
          cb2();

        }, (err) => { // after group is done updates
          if (err) {
            callback(err);
          }

          if (flag) {
            lib.bigbetter.betterdb['@dev'].setGroup(channel_id, group, (err, group) => {
              if (err) {
                callback(err);
              }
              cb();
            });
          } else {
            cb();
          }
        });

      })
    }, (err) => {
      if (err) {
        callback(err);
      }
      callback(err, channels);
    });

  });
};
