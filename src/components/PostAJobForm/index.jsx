import "./style.css";

function PostAJobForm(props) {
    return (
        <form>
            <div>
                <label>Title</label>
                <input
                value={props.title}
                name="title"
                onChange={props.handleInputChange}
                type="text"
                placeholder="Job Title"
                />
                <label>Company</label>
                <input
                value={props.title}
                name="company"
                onChange={props.handleInputChange}
                type="text"
                placeholder="Company Name"
                />
                <label>Location</label>
                <input
                value={props.title}
                name="location"
                onChange={props.handleInputChange}
                type="text"
                placeholder="Location"
                />
                <label>Salary</label>
                <input
                value={props.title}
                name="salary"
                onChange={props.handleInputChange}
                type="text"
                placeholder="Salary"
                />
                <label>Start Date</label>
                <input
                value={props.title}
                name="startDate"
                onChange={props.handleInputChange}
                type="text"
                placeholder="Start Date"
                />
                <label>Description</label>
                <input
                value={props.title}
                name="description"
                onChange={props.handleInputChange}
                type="text"
                placeholder="Job Description"
                />
            </div>
            <button onClick={props.handleFormSubmit}>Submit</button>
        </form>
    );
}

export default PostAJobForm;