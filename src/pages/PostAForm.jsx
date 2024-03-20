import React, { useState } from 'react';
import PostAJobForm from '../components/PostAJobForm'
import PostAProfileForm from '../components/PostAProfileForm'
import CreatePreview from '../components/CreatePreview'
import styled from "styled-components";
import API from '../utils/API';
import { COLLECTION_ID_JOBS, DATABASE_ID, databases } from '../utils/appwriteConfig';

const FormHeading = styled.h2 `
    font-family: 'Raleway', sans-serif;
    text-align: center;
`;

const SubmitBtn = styled.button `
    background-color: rgb(235, 86, 123);
    color: #fff;
    font-family: 'Raleway', sans-serif;
    font-size: 1.2rem;
    font-weight: 500; 
    width: 200px; 
    border: none; 
    border-radius: 50px;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
        background-color: rgb(235, 86, 123);
    }
`;

const jobData = {
    title: '',
    company: '',
    location: '',
    salary: '',
    startDate: '',
    description: ''
}

const profileData = {
    name: '',
    industry: '',
    location: '',
    salary: '',
    startDate: '',
    description: '',
}

function PostAForm(props) {

    let type = props.type;
    let data = type === "job" ? jobData : profileData;
    const [formData, setFormData] = useState(data);

    const handleInputChange = (event) => {
        let value = event.target.value;
        const name = event.target.name;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleFormSubmit = async (event) => {

        event.preventDefault();

        if (type === "job") {
            API.postJob(formData);
        } else {
            API.postProfile(formData);
        }

        setFormData('');
    }

    const form = type === "job" ? <PostAJobForm handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} /> : <PostAProfileForm handleInputChange=
    {handleInputChange} handleFormSubmit={handleFormSubmit} />;

    return (
        <div className='container-fluid form-container'>
            <div className='row mt-5'>
                <FormHeading>{type === 'job' ? 'CREATE JOB POSTING' : 'CREATE A PROFILE'}</FormHeading>
            </div>
            <div className='row mt-3'>
                <div className='col-md-6'>
                    {form}
                </div>
                <div className="col-md-6">
                    <CreatePreview formData={formData} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12 text-center">
                    <SubmitBtn id='post-form-btn' className="btn btn-primary" onClick={handleFormSubmit}>{type === 'job'? 'POST JOB' : 'POST PROFILE'}</SubmitBtn>
                </div>
            </div>
        </div>
    )
}

export default PostAForm;