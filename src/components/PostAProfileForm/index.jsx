import "./style.css";

function PostAProfileForm(props) {
    return (
        <form>
            <div>
                <label>Name</label>
                <input
                value={props.title}
                name="name"
                onChange={props.handleInputChange}
                type="text"
                placeholder="Firstname and Surname"
                />
                <label>Desired Industry</label>
                <input
                value={props.title}
                name="industry"
                onChange={props.handleInputChange}
                type="text"
                placeholder="Desired Industry"
                />
                <label>Location</label>
                <input
                value={props.title}
                name="location"
                onChange={props.handleInputChange}
                type="text"
                placeholder="Location"
                />
                <label>Preferred Salary</label>
                <input
                value={props.title}
                name="salary"
                onChange={props.handleInputChange}
                type="text"
                placeholder="Preferred Salary"
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
        </form>
    );
}

export default PostAProfileForm;