import React from 'react'
import JobCard from './JobCard'

const jobList = props =>(
          <section>
                              {props.jobs.map( job => <JobCard key={job.id} job={job}/>)} 
          </section>
)

export default jobList
