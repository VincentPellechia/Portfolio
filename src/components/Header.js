import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(to bottom, #2E3A4D, #14222E);
  color: white;
  padding: 5rem 0;
  text-align: center;
`;

const Tagline = styled.h2`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const CTAButton = styled.a`
  background-color: var(--secondary-color); /* Use the secondary color */
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-top: 2rem;
  cursor: pointer;
  text-decoration: none; /* Remove default link underline */
  display: inline-block;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: var(--accent-color); /* Use the accent color on hover */
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Vincent Pellechia</h1>
      <Tagline>Creating Digital Experiences That Delight</Tagline>
      <CTAButton href="#projects">Explore My Work</CTAButton>
    </HeaderContainer>
  );
};

export default Header;