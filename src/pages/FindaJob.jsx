import React, { useState, useEffect } from 'react';
import Container from '../components/Container';
import Row from '../components/Row';
import JobSearchForm from '../components/jobSearchForm';
import JobCard from '../components/JobCard';
import API from '../utils/API.js';

function FindaJob() {

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    API.getJobPost()
    .then((res) => {setJobs(res.documents)});
  }, [])

  return (
    <Container>
        <h1 className="title">Search for a Job</h1>
        <JobSearchForm />
        <Row>
        <div>{jobs.map(job => (
          <div key={job.$id}>
            <JobCard
              title={job.title}
              description={job.description}
              posted={job.$createdAt}
             />
          </div>
        ))}</div>
        </Row>
    </Container>
  )
}

export default FindaJob;