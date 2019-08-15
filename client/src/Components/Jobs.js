import React, { Fragment } from 'react'
import Job from './Job';

//* Holds Component Tree


const Jobs = ({ jobs }) => {
  return (
    <Fragment>
      <div className="Jobs">
        <h1 style={{ fontSize: "72px" }}> Volt.</h1>
        <h2>Job List</h2>
        {
          jobs.map(job => <Job job={job} />)
        }



      </div>
    </Fragment>
  )
}

export default Jobs;