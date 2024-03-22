import './style.css';

function SearchForm(props) {
    return (
        <form className="search">
            <div className="mb-3 search-container">
                <div className='search-input'>
                    <input
                    onChange={props.handleInputTitle}
                    name="title"
                    type="text"
                    className="form-control"
                    placeholder="Job Title"
                    id="job-title"
                    />
                </div>
                <div className='search-input'>
                    <input
                    onChange={props.handleInputLocation}
                    name="location"
                    type="text"
                    className="form-control"
                    placeholder="Location, e.g Birmingham"
                    id="job-location"
                    />
                </div>
                <button
                type="submit"
                onClick={props.handleFormSubmit}
                className="btn btn-search"
                >
                Search
                </button>
            </div>
        </form>
  );
}

export default SearchForm