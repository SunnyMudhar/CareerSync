import styled from "styled-components";

const H1 = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
`;
const Home = () => {
  return (
    <div>
      <H1>CONNECTING THE RIGHT TALENT TO THE RIGHT ORGANISATION</H1>
      <div className="button-container">
        <button className="button-a">SEARCH TALENT</button>
        <button className="button-b">SEARCH JOB</button>
      </div>
      Home
    </div>
  );
};

export default Home;
