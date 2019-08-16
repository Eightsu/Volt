import React, {useEffect, useState} from 'react';
import './App.css';
import Jobs from './Components/Jobs';

const JOB_URL = 'http://localhost:8000/jobs';

// Mock JSON
const Dummyjobs = [
  {
    title: "Job One",
    company: "Microsoft",
    url: "www.test.com"
  },
  {
    title: "Job Two",
    company: "Google",
    url: "www.test.com"
  },

]


const fetchJobs = async() => {
  const res = await fetch(JOB_URL);
  const json = await res.json();
  console.log(json);
  console.log({json});

}


function App() {

  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="App" style=
      {
        { margin: " 0 auto", width: "50%", border: "4px solid black" }
      }>

      <Jobs jobs={Dummyjobs} />


    </div>
  );
}

export default App;
