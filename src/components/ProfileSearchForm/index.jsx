import './style.css';

function SearchForm(props) {
    return (
        <form className="search">
            <div className="mb-3 search-container">
                <div className='search-input'>
                    <input
                    onChange={props.handleInputTitle}
                    name="desiredIndustry"
                    type="text"
                    className="form-control"
                    placeholder="Desired Industry"
                    id="profile-desiredIndustry"
                    />
                </div>
                <div className='search-input'>
                    <input
                    onChange={props.handleInputLocation}
                    name="location"
                    type="text"
                    className="form-control"
                    placeholder="Location, e.g Birmingham"
                    id="profile-location"
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