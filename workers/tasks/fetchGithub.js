
let fetch = require("node-fetch");
const srcURL = "https://jobs.github.com/positions.json";
// * Start at page 1.


const fetchGithub = async () => {

  let resultCount = 1;
  let pageNumber = 0;

  const allJobs = [];

  while(resultCount != 0) {
    
    
      //* Sub Routine
      const res = await fetch(`srcURL?page=${pageNumber}`);
      const jobs = await res.json();
      // allJobs - Push into array?
      console.log(jobs.length)
  }
}

fetchGithub();

module.exports = fetchGithub;