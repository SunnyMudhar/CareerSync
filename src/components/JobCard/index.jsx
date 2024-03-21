import "./style.css";

function JobCard(props) {
  return (
    <>
    <div className="card job-card">
      <div className="content">
        <p className="card-title">
          {props.title}
        </p>
        <p>
          Company: {props.company}
        </p>
        <div className="final-card-line">
          <p>
            Location: {props.location}
          </p>
          <button type="button" className="btn btn-primary btn-expand" data-bs-toggle="modal" data-bs-target={`#${props.id}`}>
            Expand
          </button>
        </div>
      </div>
    </div>
    <div className="modal fade" id={props.id} tabIndex="-1" aria-labelledby="jobModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="jobModalLabel">{props.title}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>
              Company: {props.company}
            </p>
            <p>
              Location: {props.location}
            </p>
            <p>
              Salary: £{props.salary}
            </p>
            <p>
              Start Date: {props.startDate}
            </p>
            <p>
              Description:<br /> {props.description}
            </p>
            <p>
              Posted on: {props.posted}
            </p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default JobCard;