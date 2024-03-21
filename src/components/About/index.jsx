import Container from '../Container';
import Row from '../Row';
import './style.css';

const About = () => {
    return (
        <>
        <Container>
            <Row>
                <div className='about about-us col-lg-12'>
                    <h2 className="title">ABOUT US</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consequatur magnam laboriosam nemo cupiditate velit quasi nostrum nisi modi, aut eum repudiandae illum consequuntur ipsum, vel itaque id ad? Eligendi?
                    </p>
                </div>
                <div className='about mission-statement col-lg-12'>
                    <h2 className="title">HOW WE CAN HELP YOU</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quos iusto dolores distinctio, eos iure veniam quidem praesentium voluptatibus? Harum, iste soluta aperiam dolorem praesentium dicta delectus officia commodi ipsam?
                    </p>
                </div>
            </Row>
        </Container>
        </>
    );
}

export default About;