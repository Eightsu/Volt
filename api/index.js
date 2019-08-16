const express = require("express");
let app = express();
const PORT = 8000;

// 2nd Instance of redis API**
let redis = require("redis");
const { promisify } = require('util');

let client = redis.createClient();

const getAsync = promisify(client.get).bind(client);

app.get('/jobs', async (req, res) => {

  const jobs = await getAsync("github");
  console.log(JSON.parse(jobs).length);
  res.send(jobs);

});

app.listen(PORT, () => {
  console.log(`The api is running on ${PORT}`)
});