import React from "react";

function SearchForm() {
    return (
        <form className="search">
            <div className="mb-3">
                <label htmlFor="job" className="form-label">
                Breed Name:
                </label>
                <input
                value={props.search}
                onChange={props.handleInputChange}
                name="job"
                list="jobs"
                type="text"
                className="form-control"
                placeholder="Search for a job"
                id="job-search"
                />
                {/* <datalist id="jobs">
                {props.breeds.map((breed) => (
                    <option value={breed} key={breed} />
                ))} */}
                {/* </datalist> */}
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