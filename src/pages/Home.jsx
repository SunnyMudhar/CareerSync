
import { Link, NavLink } from "react-router-dom";
import Hero from "../components/Hero";
import styled from "styled-components";

const Content = styled.div`
  margin-top: 250px;
`
const H1 = styled.h1`
  margin-bottom: 2.5rem;
  font-family: "Raleway", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #ffffff;
`;

const HomeBtn = styled.div`
  height: 80px;
  .btn-general {
    color: #ffffff;
    font-family: "Raleway", sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    width: 200px;
    border: none;
    border-radius: 50px;
    padding: 10px 20px;
    margin-right: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }

  .btn-talent {
    background-color: rgb(63, 188, 248);
  }

  .btn-job {
    background-color: rgb(235, 86, 123);
  }
`;

const Home = () => {
  return (
    <Hero>
      <Content>
        <H1>CONNECTING THE RIGHT TALENT TO THE RIGHT ORGANISATION</H1>
        <HomeBtn>
          <Link to="/findajob">
            <button className="btn-general btn-talent">SEARCH TALENT</button>
          </Link>
          <Link to="/postajob">
            <button className="btn-general btn-job">SEARCH JOB</button>
          </Link>
        </HomeBtn>
      </Content>
    </Hero>
  );
};

export default Home;
