import "./style.css";

function ProfileCard(props) {
  return (
    <>
    <div className="card profile-card">
      <div className="content">
        <p className="card-title">
          {props.name}
        </p>
        <p>
          Desired Industry: {props.desiredIndustry}
        </p>
        <div className="final-card-line">
          <p>
            Location: {props.location}
          </p>
          <button type="button" className="btn btn-primary btn-expand" data-bs-toggle="modal" data-bs-target="#profileModal">
            Expand
          </button>
        </div>
      </div>
    </div>
    <div className="modal fade" id="profileModal" tabIndex="-1" aria-labelledby="profileModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="profileModalLabel">{props.name}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>
              Desired Industry: {props.desiredIndustry}
            </p>
            <p>
              Location: {props.location}
            </p>
            <p>
              Desired Salary: £{props.preferredSalary}
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

export default ProfileCard;