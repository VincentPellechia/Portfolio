import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  position: fixed;
  top: ${props => (props.visible ? '0' : '-100px')};
  width: 100%;
  background-color: #333;
  color: white;
  padding: 1rem;
  z-index: 1000;
  transition: top 0.3s;
  display: flex; /* Display links in a row */
  align-items: center; /* Vertically center links */
`;

const NavLinks = styled.div`
  margin-left: auto;
  margin-right: 30px;
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  margin: 0 10px;
`;

const Navbar = ({visible}) => {
  return (
    <NavbarContainer visible={visible}>
      <NavLinks>
        <NavLink href="#header">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;