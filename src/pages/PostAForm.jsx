import React, { useState } from 'react';
import PostAJobForm from '../components/PostAJobForm'
import PostAProfileForm from '../components/PostAProfileForm'
import CreatePreview from '../components/CreatePreview'
import './style.css'

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
    Industry: '',
    location: '',
    salary: '',
    startDate: '',
    description: '',
}

function PostAForm(props) {

    let type = props.type;
    let data = type === "job" ? jobData : profileData;
    const [previewData, setPreviewData] = useState(data);

    const handleInputChange = (event) => {
        let value = event.target.value;
        const name = event.target.name;

        setPreviewData({
            ...previewData,
            [name]: value,
        });
    }

    const handleFormSubmit = async (event) => {

        event.preventDefault();
        const formData = {...previewData};

        // try {
        //     const response = await fetch('../utils/', {
        //       method: 'POST',
        //       headers: {
        //         'Content-Type': 'application/json',
        //       },
        //       body: JSON.stringify(formData),
        //     });
      
        //     if (!response.ok) {
        //       throw new Error('Network response was not ok');
        //     }
      
        //     // Optionally handle response data here
        //     const responseData = await response.json();
        //     console.log('Response from server:', responseData);
        //   } catch (error) {
        //     console.error('Error:', error);
        // }
    }

    const form = type === "job" ? <PostAJobForm handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} /> : <PostAProfileForm handleInputChange=
    {handleInputChange} handleFormSubmit={handleFormSubmit} />;

    return (
        <div className='container-fluid form-container'>
            <div className='row form-heading mt-5'>
                <h2>{type === 'job' ? 'CREATE JOB POSTING' : 'CREATE A PROFILE'}</h2>
            </div>
            <div className='row mt-3'>
                <div className='col-md-6'>
                {form}
                </div>
                <div className="col-md-6">
                    <CreatePreview previewData={previewData} />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-12 text-center">
                    <button id='post-form-btn' className="btn btn-primary" onClick={handleFormSubmit}>{type === 'job'? 'POST JOB' : 'POST PROFILE'}</button>
                </div>
            </div>
        </div>
    )
}

export default PostAForm;