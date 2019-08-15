let CronJob = require('cron').CronJob;
new CronJob('* * * * * *', function () {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');


//! Cron Setting for once and hour every day for "12 months 0 1/1 * Jan-dec 0-6"