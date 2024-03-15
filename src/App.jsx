import CreatePost from "./pages/PostAForm";
import React from "react";
import NavBar from "./components/NavBar/navbar.jsx";
import styled from "styled-components";
import Wave from "./components/Wave/Wave.jsx";
import FindJob from "./pages/FindaJob.jsx";
import Home from "./pages/Home.jsx";
const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <AppContainer>
      <NavBar />
      {/* <Wave /> */}
      <FindJob />
      <Home />
      <CreatePost />
    </AppContainer>
  );
};


export default App;
