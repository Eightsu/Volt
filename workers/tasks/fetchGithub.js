
let fetch = require("node-fetch");
let redis = require("redis");
const { promisify } = require('util');

// First Instance of Redis TASKS**

let client = redis.createClient();
const setAsync = promisify(client.set).bind(client);





const srcURL = "https://jobs.github.com/positions.json";
// * Start at page 1.

async function fetchGithub() {

  let resultCount = 1;
  let pageNumber = 0;

  const allJobs = [];
  //* Array for jobs

  while (resultCount != 0) {


    //* Sub Routine
    const res = await fetch(`${srcURL}?page=${pageNumber}`);
    const jobs = await res.json();
    await allJobs.push(...jobs);

    resultCount = jobs.length;
    console.log(resultCount);
    pageNumber++;

  }
  console.log("Job Done."); // Done fetching


  // Filter(s) here?

  const junior = allJobs.filter(job => {
    const jobTitle = job.title.toLowerCase(); // Get rid of variation

    if
      (jobTitle.includes("senior") ||
      jobTitle.includes("sr.") ||
      jobTitle.includes("manager") ||
      jobTitle.includes("lead") ||
      jobTitle.includes("architect")) {
      return false;
    }
    return true;
  });

  console.log(`now we have ${junior.length} jobs.`)


  // "github" is the key for redis data

  const finished = await setAsync("github", JSON.stringify(junior)); // Set in Redis
  console.log({ finished });

}

// fetchGithub();


module.exports = fetchGithub;