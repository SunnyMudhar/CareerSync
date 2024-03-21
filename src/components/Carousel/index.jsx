import reviews from "../../utils/reviews.json"
import Container from "../Container";
import Row from "../Row";
import CarouselItem from "../CarouselItem";
import "./style.css";

const Carousel = () => {
  return (
    <Container>
      <Row>
        <h2 className='title-testemonials'>TESTEMONIALS</h2>
        <div id="review-carousel" className="carousel slide">
          <div className="carousel-inner">
            {reviews.map((review, id) => (
                <div className={id === 0 ? "carousel-item active" : "carousel-item"} key = {id}>
                  <div className="carousel-item-wrapper">
                    <CarouselItem
                      name = {review.name}
                      review = {review.review}
                    />
                  </div>
                </div>
              ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#review-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#review-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Row>
    </Container>
  );
}

export default Carousel;
