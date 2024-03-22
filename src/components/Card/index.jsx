import dayjs from 'dayjs';
import "./style.css";

function Card(props) {
  return (
    <>
    <div className="card job-card">
      <div className="content">
        <p className="card-title">
          {props.title}
        </p>
        <p>
          {props.company[0]} {props.company[1]}
        </p>
        <div className="final-card-line">
          <p>
            {props.location[0]} {props.location[1]}
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
              {props.company[0]} {props.company[1]}
            </p>
            <p>
              {props.location[0]} {props.location[1]}
            </p>
            <p>
              {props.salary[0]}{props.salary[1]}
            </p>
            <p>
              {props.startDate[0]} {dayjs(props.startDate[1]).format("DD/MM/YYYY")}
            </p>
            <p>
              {props.description[0]} {props.description[1]}
            </p>
            <p>
              {props.posted[0]} {dayjs(props.posted[1]).format("DD/MM/YYYY")}
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

export default Card;