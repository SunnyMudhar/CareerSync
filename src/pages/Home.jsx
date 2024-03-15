import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Homediv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: rgb(69, 91, 181);
`;
const H1 = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
  color: #ffffff;
  position: relative;
  top: -20vh;
  right: -20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 80px;
`;
const HomeBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -20vh;
  right: -20vw;
  width: 600px;
  height: 80px;
  .button-a {
    background-color: rgb(235, 86, 123);
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

  .button-b {
    background-color: rgb(63, 188, 248);
    color: #ffffff;
    width: 200px;
    font-family: "Raleway", sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    border: none;
    border-radius: 50px;
    padding: 10px 20px;
    margin-left: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;
const Home = () => {
  return (
    <>
      <Homediv>
        <H1>CONNECTING THE RIGHT TALENT TO THE RIGHT ORGANISATION</H1>
        <HomeBtn>
          <NavLink to="/findajob">
            <button className="button-a">SEARCH TALENT</button>
          </NavLink>
          <NavLink to="/postajob">
            <button className="button-b">SEARCH JOB</button>
          </NavLink>
        </HomeBtn>
        Home Welcome
      </Homediv>
    </>
  );
};

export default Home;
