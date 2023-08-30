import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 4rem 0;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Subheading = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Content = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const CTAButton = styled.a`
  background-color: var(--secondary-color);
  color: white;
  padding: 0.5rem 1.5rem;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: var(--accent-color);
  }
`;

const AboutMe = () => {
  return (
    <AboutContainer id="about">
      <Heading>About Me</Heading>
      <Subheading>Passionate Developer | Creative Thinker</Subheading>
      <Content>
      Hello there! I'm Vincent Pellechia, a self-starter and ardent developer driven by a 
      passion for software development. I'm on a mission to craft digital solutions that leave 
      a mark. Thriving on challenges, I excel in transforming ideas into tangible realities.
      </Content>
      <CTAButton href="#contact">Get in Touch</CTAButton>
    </AboutContainer>
  );
};

export default AboutMe;