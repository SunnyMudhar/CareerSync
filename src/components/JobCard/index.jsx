import "./style.css";

function JobCard(props) {
  return (
    <div className="card contact-card">
      <div className="content">
        <p>
          {props.title}
        </p>
        <p>
          {props.description}
        </p>
        <p>
          Posted on: {props.posted}
        </p>
      </div>
    </div>
  );
}

export default JobCard;