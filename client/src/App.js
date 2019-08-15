import React from 'react';
import './App.css';
import Jobs from './Components/Jobs';

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
  ||
  {}

function App() {

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
