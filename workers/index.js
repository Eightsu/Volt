let fetchGithub = require('./tasks/fetchGithub');

//* Default, Scheduler set to every minute.

let CronJob = require('cron').CronJob;
new CronJob('* * * * * ', fetchGithub, null, true, 'America/Los_Angeles');


//̶ F̶e̶t̶c̶h̶ G̶i̶t̶h̶u̶b̶(̶X̶)̶
// TODO Fetch Indeed(?)
// TODO Fetch GlassDoor(?)



//! Cron Setting for once and hour every day for "12 months 0 1/1 * Jan-dec 0-6"