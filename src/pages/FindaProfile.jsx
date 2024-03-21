import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Container from '../components/Container';
import Row from '../components/Row';
import ProfileSearchForm from '../components/ProfileSearchForm';
import ProfileCard from '../components/ProfileCard';
import API from '../utils/API.js';
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
    setprofileSearchData((prevSearchData) => ({
      ...prevSearchData,
      searchQuery: {
        industry: event.target.value,
      },
    }));
  }

  const handleInputLocation = (event) => {
    setprofileSearchData((prevSearchData) => ({
      ...prevSearchData,
      searchQuery: {
        location: event.target.value,
      },
    }));
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.getProfilePost(profileSearchData.searchQuery.industry, profileSearchData.searchQuery.location)
      .then((res) => {
        if (res.documents.code === 400 || res.documents.code === 404 || res.documents.code === 500) {
          throw new Error(res.documents.message);
        }
        setprofileSearchData({...profileSearchData, profiles: res.documents });
      })
      .catch((err) => setprofileSearchData({ ...profileSearchData, error: err.message }));
      console.log("ERR: ", profileSearchData.error);
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
              <ProfileCard
                name={profile.name}
                desiredIndustry={profile.desiredIndustry}
                location={profile.location}
                preferredSalary={profile.preferredSalary}
                startDate={profile.startDate}
                description={profile.description}
                posted={profile.$createdAt}
              />
            </div>
          ))}</div>
          </Row>
      </Container>
    </>
  )
}

export default FindAProfile;