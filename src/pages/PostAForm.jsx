import React, { useState } from 'react';
import PostAJobForm from '../components/PostAJobForm'
import PostAProfileForm from '../components/PostAProfileForm'
import CreatePreview from '../components/CreatePreview'

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

let type = '';

function CreateJobPost() {
    type = "profile"
    const [previewData, setPreviewData] = useState('');

    const handleInputChange = (event) => {
        let value = event.target.value;
        const name = event.target.name;

        setPreviewData({
            ...previewData,
            [name]: value,
        });
    }

    const form = type === "job" ? <PostAJobForm handleInputChange={handleInputChange} /> : <PostAProfileForm handleInputChange=
    {handleInputChange} />;

    return (
        <div>
            <CreatePreview previewData={previewData} />
            {form}
        </div>
    )
}

export default CreateJobPost;