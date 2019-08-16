import React from 'react'




const Job = ({job}) => {
  return(
    <div className="job" >
      
      <p>{job.title}</p>
      <h4><strong>{job.company}</strong></h4>
      <a> {job.url} </a>
    </div>
  )

  }

export default Job;