
let fetch = require("node-fetch");
let redis = require("redis");

let client = redis.createClient();

const { promisify } = require('util');
// const getAsync = promisify(client.get).bind(client);
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
  console.log("Job Done.");


  const finished = await setAsync("github", JSON.stringify(allJobs));
  console.log(allJobs.length);
  // for(i=0; i< allJobs.length; i++){
  //   // console.log(allJobs[i].title);
  // }

  console.log({ finished });
}

// fetchGithub();


module.exports = fetchGithub;