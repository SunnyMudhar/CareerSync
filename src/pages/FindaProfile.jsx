import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Container from '../components/Container';
import Row from '../components/Row';
import ProfileSearchForm from '../components/ProfileSearchForm';
import Card from '../components/Card';
import API from '../utils/API.js';
import Alert from '../components/Alert';
import styled from "styled-components";

const FormHeading = styled.h2`
  margin-top: 25px;
  color: #ffffff;
`

function FindAProfile() {

  const [profileSearchData, setprofileSearchData] = useState({
    searchQuery: {
      industry: '',
      location: ''
    },
    profiles: [],
    error: ''
  });

  const handleInputIndustry = (event) => {
    setprofileSearchData((search) => ({
      ...search,
      searchQuery: {
        industry: event.target.value,
      },
    }));
  }

  const handleInputLocation = (event) => {
    setprofileSearchData((search) => ({
      ...search,
      searchQuery: {
        location: event.target.value,
      },
    }));
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if(profileSearchData.searchQuery.industry === '' && profileSearchData.searchQuery.location === '') {
      Alert("error", "Please Enter an Industry or Location");
      console.log("ERR: no params detected for search query");
      return;
    }

    API.getProfilePost(profileSearchData.searchQuery.industry, profileSearchData.searchQuery.location)
      .then((res) => {
        if (res.documents.code === 400 || res.documents.code === 404 || res.documents.code === 500) {
          throw new Error(res.documents.message);
        } else if (res.total === 0) {
          Alert("error", "No Results Found");
        }
        setprofileSearchData({...profileSearchData, profiles: res.documents });
      })
      .catch((err) => {
        setprofileSearchData({ ...profileSearchData, error: err.message });
        Alert("error", err);
      });
  };

  return (
    <>
      <Banner>
        <FormHeading className="title">SEARCH FOR TALENT</FormHeading>
      </Banner>
      <Container>
          <ProfileSearchForm
            handleFormSubmit={handleFormSubmit}
            handleInputTitle={handleInputIndustry}
            handleInputLocation={handleInputLocation}
          />
          <Row>
          <div>{profileSearchData.profiles.map(profile => (
            <div key={profile.$id}>
              <Card
                id={profile.$id}
                title={profile.name}
                company={["Desired Industry: ", profile.desiredIndustry]}
                location={["Location: ", profile.location]}
                salary={["Preferred Salary: ", profile.preferredSalary]}
                startDate={["Ideal Start Date: ", profile.startDate]}
                description={["Description: ", profile.description]}
                posted={["Posted on: ", profile.$createdAt]}
              />
            </div>
          ))}</div>
          </Row>
      </Container>
    </>
  )
}

export default FindAProfile;