import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import Home from "./pages/Home.jsx";
import FindAJob from "./pages/FindaJob.jsx"
import FindAProfile from "./pages/FindaProfile.jsx"
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
          <Route path="/findajob" element={<FindAJob />} />
          <Route path="/findaprofile" element={<FindAProfile />} />
          <Route path="/postajob" element={<PostAForm type="job" />} />
          <Route path="/postaprofile" element={<PostAForm type="profile" />} />
        </Routes>
      </Router>
    </AppContainer>
  );
};

export default App;