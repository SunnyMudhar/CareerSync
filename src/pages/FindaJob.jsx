import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner/index.jsx';
import Container from '../components/Container';
import Row from '../components/Row';
import JobSearchForm from '../components/JobSearchForm';
import Card from '../components/Card';
import API from '../utils/API.js';
import Alert from '../components/Alert';
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
    setjobSearchData((search) => ({
      ...search,
      searchQuery: {
        title: event.target.value,
      },
    }));
  }

  const handleInputLocation = (event) => {
    setjobSearchData((search) => ({
      ...search,
      searchQuery: {
        location: event.target.value,
      },
    }));
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if(jobSearchData.searchQuery.title === '' && jobSearchData.searchQuery.location === '') {
      Alert("error", "Please Enter a Job Title or Location");
      console.log("ERR: no params detected for search query");
      return;
    }

    API.getJobPost(jobSearchData.searchQuery.title, jobSearchData.searchQuery.location)
      .then((res) => {
        if (res.documents.code === 400 || res.documents.code === 404 || res.documents.code === 500) {
          throw new Error(res.documents.message);
        } else if (res.total === 0) {
          Alert("error", "No Results Found");
        }
        setjobSearchData({...jobSearchData, jobs: res.documents });
      })
      .catch((err) => {
        setjobSearchData({ ...jobSearchData, error: err.message });
        Alert("error", err);
      });
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
              <Card
                id={job.$id}
                title={job.title}
                company={["Company: ", job.company]}
                location={["Location: ", job.location]}
                salary={["Salary: £", job.salary]}
                startDate={["Start Date: ", job.startDate]}
                description={["Description: ", job.description]}
                posted={["Posted on: ", job.$createdAt]}
              />
            </div>
          ))}</div>
          </Row>
      </Container>
    </>
  )
}

export default FindaJob;