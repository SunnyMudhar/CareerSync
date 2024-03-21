import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner/index.jsx';
import Container from '../components/Container';
import Row from '../components/Row';
import JobSearchForm from '../components/JobSearchForm';
import JobCard from '../components/JobCard';
import API from '../utils/API.js';
import styled from "styled-components";

const FormHeading = styled.h2`
  margin-top: 25px;
  color: #ffffff;
`

function FindaJob() {

  const [jobSearchData, setjobSearchData] = useState({
    searchQuery: {
      title: '',
      location: ''
    },
    jobs: [],
    error: ''
  });

  const handleInputTitle = (event) => {
    setjobSearchData((prevSearchData) => ({
      ...prevSearchData,
      searchQuery: {
        title: event.target.value,
      },
    }));
  }

  const handleInputLocation = (event) => {
    setjobSearchData((prevSearchData) => ({
      ...prevSearchData,
      searchQuery: {
        location: event.target.value,
      },
    }));
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.getJobPost(jobSearchData.searchQuery.title, jobSearchData.searchQuery.location)
      .then((res) => {
        if (res.documents.code === 400 || res.documents.code === 404 || res.documents.code === 500) {
          throw new Error(res.documents.message);
        }
        setjobSearchData({...jobSearchData, jobs: res.documents });
      })
      .catch((err) => setjobSearchData({ ...jobSearchData, error: err.message }));
      console.log("ERR: ", jobSearchData.error);
  };

  return (
    <>
      <Banner>
        <FormHeading className="title">SEARCH FOR A JOB</FormHeading>
      </Banner>
      <Container>
          <JobSearchForm
            handleFormSubmit={handleFormSubmit}
            handleInputTitle={handleInputTitle}
            handleInputLocation={handleInputLocation}
          />
          <Row>
          <div>{jobSearchData.jobs.map(job => (
            <div key={job.$id}>
              <JobCard
                title={job.title}
                company={job.company}
                location={job.location}
                salary={job.salary}
                startDate={job.startDate}
                description={job.description}
                posted={job.$createdAt}
              />
            </div>
          ))}</div>
          </Row>
      </Container>
    </>
  )
}

export default FindaJob;