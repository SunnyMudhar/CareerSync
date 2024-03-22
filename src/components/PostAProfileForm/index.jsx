import "./style.css";
import React from 'react';

function PostAProfileForm(props) {
    return (
        <form>
            <div className='form-group row mt-3 mb-3'>
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-10">
                    <input
                        className='form-control'
                        value={props.name}
                        name="name"
                        onChange={props.handleInputChange}
                        type="text"
                        placeholder="Firstname and Surname"
                    />
                </div>
            </div>
            <div className='form-group row mb-3'>
                <label className="col-sm-2 col-form-label">Desired Industry</label>
                <div className="col-sm-10">
                    <input
                        className='form-control'
                        value={props.industry}
                        name="industry"
                        onChange={props.handleInputChange}
                        type="text"
                        placeholder="Desired Industry"
                    />
                </div>
            </div>
            <div className='form-group row mb-3'>
                <label className="col-sm-2 col-form-label">Location</label>
                <div className="col-sm-10">
                    <input
                        className='form-control'
                        value={props.location}
                        name="location"
                        onChange={props.handleInputChange}
                        type="text"
                        placeholder="Location"
                    />
                </div>
            </div>
            <div className='form-group row mb-3'>
                <label className="col-sm-2 col-form-label">Preferred Salary</label>
                <div className="col-sm-10">
                    <input
                        className='form-control'
                        value={props.salary}
                        name="salary"
                        onChange={props.handleInputChange}
                        type="text"
                        placeholder="Preferred Salary"
                    />
                </div>
            </div>
            <div className='form-group row mb-3'>
                <label className="col-sm-2 col-form-label">Start Date</label>
                <div className="col-sm-10">
                    <input
                        className='form-control'
                        value={props.startDate}
                        name="startDate"
                        onChange={props.handleInputChange}
                        type="text"
                        placeholder="Start Date (MM/DD/YYYY)"
                    />
                </div>
            </div>
            <div className='form-group row mb-3'>
                <label className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                    <textarea
                        className='form-control'
                        value={props.description}
                        name="description"
                        onChange={props.handleInputChange}
                        type="text"
                        placeholder="Profile Description"
                    ></textarea>
                </div>
            </div>
        </form>
    );
}

export default PostAProfileForm;
