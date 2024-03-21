import './style.css';

const CarouselItem = (props) => {
    return (
        <div className="card review-card">
            <div className="content">
                <p>{props.name}</p>
                <p>"{props.review}"</p>
            </div>
        </div>
    );
}

export default CarouselItem;