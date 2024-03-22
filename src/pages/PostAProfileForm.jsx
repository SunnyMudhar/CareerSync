import React, { useState } from 'react';
import Banner from '../components/Banner';
import CreatePreview from '../components/CreatePreview'
import styled from "styled-components";
import Alert from '../components/Alert';
import API from '../utils/API';

const FormHeading = styled.h2 `
    margin-top: 1rem;
    color: #ffffff;
`;

const SubmitBtn = styled.button `
    background-color: rgb(235, 86, 123);
    color: #fff;
    font-size: 1.2rem;
    font-weight: 500; 
    width: 200px; 
    border: none; 
    border-radius: 50px;
    padding: 10px 20px;
    margin: 50px 50px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.1);
        background-color: rgb(235, 86, 123);
    }
`;

const profileData = {
    name: '',
    industry: '',
    location: '',
    salary: '',
    startDate: '',
    description: '',
}

function PostAProfileForm() {

    const [formData, setFormData] = useState(profileData);

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

        let errorMessage = '';
        const requireData = Object.values(formData)

        requireData.map(req => {
            if (req === '') {
                errorMessage = "Please Fill out All Fields";
                return;
            }
        });

        if(errorMessage !== '') {
            Alert("error", errorMessage);
            return;
        }

        API.postProfile(formData);
        Alert("success", "Profile Submitted");

        setFormData(profileData); // Reset the preview to the original object
    }

    return (
        <>
        <Banner>
            <FormHeading className="title">CREATE A PROFILE POST</FormHeading>
        </Banner>
        <div className='container-fluid form-container'>
            <div className='row mt-3'>
                <div className='col-md-6'>
                <form>
                    <div className='form-group row mt-3 mb-3'>
                        <label className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input
                                className='form-control'
                                value={formData.name}
                                name="name"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Firstname and Surname"
                            />
                        </div>
                    </div>
                    <div className='form-group row mb-3'>
                        <label className="col-sm-2 col-form-label">Desired Industry</label>
                        <div className="col-sm-10">
                            <input
                                className='form-control'
                                value={formData.industry}
                                name="industry"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Desired Industry"
                            />
                        </div>
                    </div>
                    <div className='form-group row mb-3'>
                        <label className="col-sm-2 col-form-label">Location</label>
                        <div className="col-sm-10">
                            <input
                                className='form-control'
                                value={formData.location}
                                name="location"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Location"
                            />
                        </div>
                    </div>
                    <div className='form-group row mb-3'>
                        <label className="col-sm-2 col-form-label">Preferred Salary</label>
                        <div className="col-sm-10">
                            <input
                                className='form-control'
                                value={formData.salary}
                                name="salary"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Preferred Salary"
                            />
                        </div>
                    </div>
                    <div className='form-group row mb-3'>
                        <label className="col-sm-2 col-form-label">Start Date</label>
                        <div className="col-sm-10">
                            <input
                                className='form-control'
                                value={formData.startDate}
                                name="startDate"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Start Date (MM/DD/YYYY)"
                            />
                        </div>
                    </div>
                    <div className='form-group row mb-3'>
                        <label className="col-sm-2 col-form-label">Description</label>
                        <div className="col-sm-10">
                            <textarea
                                className='form-control'
                                value={formData.description}
                                name="description"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Profile Description"
                            ></textarea>
                        </div>
                    </div>
                </form>
                </div>
                <div className="col-md-6">
                    <CreatePreview formData={formData} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12 text-center">
                    <SubmitBtn id='post-form-btn' className="btn btn-primary" onClick={handleFormSubmit}>POST PROFILE</SubmitBtn>
                </div>
            </div>
        </div>
        </>
    )
}

export default PostAProfileForm;