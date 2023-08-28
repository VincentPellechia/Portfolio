import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 2rem;
`;

const Header = () => {
  return (
    <HeaderContainer id="header">
      <h1>Vincent Pellechia</h1>
      <p>Web Developer</p>
    </HeaderContainer>
  );
};

export default Header;