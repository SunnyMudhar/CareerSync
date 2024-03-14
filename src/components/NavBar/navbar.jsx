import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-height: 100px;

  background-color: rgb(63, 188, 248);
  color: #353535;
  padding: 1rem 2rem;
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;
  font-family: "Raleway", sans-serif;

  a {
    color: #353535;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #d9d9d9;
    }
  }
`;

const Logo = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
`;

const MobileNavToggle = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  color: #d9d9d9;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #bada55;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopNav = styled.ul`
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileNav = styled.ul`
  display: none;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media (max-width: 767px) {
    display: flex;
  }
`;

const NavBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  return (
    <Nav>
      <Logo>CAREERSYNC</Logo>
      <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
        {isMobileNavOpen ? "Close" : "Menu"}
      </MobileNavToggle>
      <DesktopNav>
        <NavItem>
          <a href="/">Home</a>
        </NavItem>
        <NavItem>
          <a href="/">FIND A JOB</a>
        </NavItem>
        <NavItem>
          <a href="/">POST A JOB</a>
        </NavItem>
        <NavItem>
          <a href="/">POST A PROFILE</a>
        </NavItem>
      </DesktopNav>
      <MobileNav style={{ display: isMobileNavOpen ? "flex" : "none" }}>
        <NavItem>
          <a href="/">Home</a>
        </NavItem>
        <NavItem>
          <a href="/">FIND A JOB</a>
        </NavItem>
        <NavItem>
          <a href="/">POST A JOB</a>
        </NavItem>
        <NavItem>
          <a href="/">POST A PROFILE</a>
        </NavItem>
      </MobileNav>
    </Nav>
  );
};

export default NavBar;
