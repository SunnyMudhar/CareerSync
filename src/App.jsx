import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/navbar.jsx";
import styled from "styled-components";
import Wave from "./components/Wave/Wave.jsx";
import FindJob from "./pages/FindaJob.jsx";
import Home from "./pages/Home.jsx";
import PostAForm from "./pages/PostAForm.jsx";

const AppContainer = styled.div`
  margin: 0 auto;
  padding: 0;
`;

const App = () => {
  return (
    <AppContainer>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/postajob" element={<PostAForm type="job" />} />
          <Route path="/postaprofile" element={<PostAForm type="profile" />} />
        </Routes>
      </Router>
      {/* <Wave /> */}
      <FindJob />
      <Home />
      <CreatePost />
    </AppContainer>
  );
};

export default App;
