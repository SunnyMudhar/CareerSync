import Container from '../Container';
import Row from '../Row';
import './style.css';

const Banner = (props) => {
    return (
        <header className='banner'>
            <Container>
                <Row>
                    {props.children}
                </Row>
            </Container>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
                <path fill="#ffffff" fillOpacity="1" d="M0,192L80,186.7C160,181,320,171,480,186.7C640,203,800,245,960,256C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
        </header>
    ); 
}

export default Banner;