import React, { useState } from 'react';

const App = () => {
  const [query, setQuery] = useState('');
  const [jobs, setJobs] = useState([]);

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
