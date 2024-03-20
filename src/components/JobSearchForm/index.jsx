import React from "react";

function SearchForm(props) {
    return (
        <form className="search">
            <div className="mb-3">
                <label htmlFor="job" className="form-label">
                Job Title
                </label>
                <input
                value={props.search}
                onChange={props.handleInputChange}
                name="job-title"
                type="text"
                className="form-control"
                placeholder="Search for a job"
                id="job-title"
                />
                <label htmlFor="job" className="form-label">
                Job Location
                </label>
                <input
                value={props.search}
                onChange={props.handleInputChange}
                name="job-location"
                type="text"
                className="form-control"
                defaultValue="Birmingham"
                placeholder="Location"
                id="job-location"
                />
                <button
                type="submit"
                onClick={props.handleFormSubmit}
                className="btn btn-success"
                >
                Search
                </button>
            </div>
        </form>
  );
}

export default SearchForm