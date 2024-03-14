import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/navbar.jsx";
import styled from "styled-components";
import Wave from "./components/Wave/Wave.jsx";
import Home from "./pages/Home.jsx";
import PostAForm from "./pages/PostAForm.jsx";
const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <AppContainer>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/postajob' element={<PostAForm type='job'/>} />
          <Route path='/postaprofile' element={<PostAForm type='profile'/>} />
        </Routes>
      </Router>
      {/* <Wave /> */}
    </AppContainer>
  );
};


export default App;
