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
                        Welcome to Career Sync, where job seekers and employers seamlessly connect. Our platform empowers job seekers to showcase their talents by posting profiles for prospective employers to discover. With a user-friendly interface, candidates can easily browse through job postings from companies actively seeking new talent. For employers, Career Sync offers a diverse pool of qualified candidates ready to excel in their roles. Whether you're seeking your next career opportunity or aiming to attract top talent, Career Sync simplifies the job search process, fostering meaningful connections that drive success for both job seekers and employers alike. Join us and synchronize your career journey today.
                    </p>
                </div>
                <div className='about mission-statement col-lg-12'>
                    <h2 className="title">HOW WE CAN HELP YOU</h2>
                    <p>
                        At Career Sync, our mission is to empower job seekers by providing a platform where they can effectively showcase their skills and connect with opportunities that align with their aspirations. We strive to streamline the job search process, offering a user-friendly experience that fosters meaningful connections between candidates and employers. By facilitating these connections, we aim to catalyze career growth and facilitate mutual success for our users, transforming the way people find and fill job roles.
                    </p>
                </div>
            </Row>
        </Container>
        </>
    );
}

export default About;