import "./style.css";
import React from 'react';

function PostAJobForm(props) {
    return (
        <form>
        <div className="form-group row mt-3 mb-3">
            <label className="col-sm-2 col-form-label">Title</label>
            <div className="col-sm-10">
                <input
                    className="form-control"
                    value={props.title}
                    name="title"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="Job Title"
                />
            </div>
        </div>
        <div className="form-group row mb-3">
            <label className="col-sm-2 col-form-label">Company</label>
            <div className="col-sm-10">
                <input
                    className="form-control"
                    value={props.company}
                    name="company"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="Company Name"
                />
            </div>
        </div>
        <div className="form-group row mb-3">
            <label className="col-sm-2 col-form-label">Location</label>
            <div className="col-sm-10">
                <input
                    className="form-control"
                    value={props.location}
                    name="location"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="Location"
                />
            </div>
        </div>
        <div className="form-group row mb-3">
            <label className="col-sm-2 col-form-label">Salary</label>
            <div className="col-sm-10">
                <input
                    className="form-control"
                    value={props.salary}
                    name="salary"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="Salary"
                />
            </div>
        </div>
        <div className="form-group row mb-3">
            <label className="col-sm-2 col-form-label">Start Date</label>
            <div className="col-sm-10">
                <input
                    className="form-control"
                    value={props.startDate}
                    name="startDate"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="Start Date (MM/DD/YYYY)"
                />
            </div>
        </div>
        <div className="form-group row mb-3">
            <label className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-10">
                <textarea
                    className="form-control"
                    value={props.description}
                    name="description"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="Job Description"
                ></textarea>
            </div>
        </div>
        <div className="form-group row">
        </div> 
    </form>
       
    );
}

export default PostAJobForm;
