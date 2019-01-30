import React from 'react'
import JobCard from './JobCard'

const jobList = props =>{
          console.log(props.jobs)
          return(
                    <section>
                              {props.jobs.map( job => <JobCard key={job.user.id} job={job}/>)} 
                    </section>
          )
}

export default jobList
