import React, { useState } from 'react';
import SearchForm from '../components/jobSearchForm';
import jobData from '../utils/api'

console.log(jobData)

function FindaJob() {
  const [searchJob, setSearchJob] = useState({
    search: '',
    jobs: [],
    results: [], 
    error: '',
  })

  const inputChangeHandler = (e) => {
    
    setSearchJob((prevSearchJob) => ({
      ...prevSearchJob,
      search: e.target.value
    }))

  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    
  }

  return (
    <div>
      <SearchForm
        handleFormSubmit={handleFormSubmit}
        inputChangeHandler={inputChangeHandler}
        jobs={searchJob.}
      />
    </div>
  )
}















const FindAJob = () => {
  // const [query, setQuery] = useState('');
  // const [jobs, setJobs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      const data = await getJobs(query);
      setJobs(data);
    }
  };

  return (
    <div>
      <h1></h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for jobs..."
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
