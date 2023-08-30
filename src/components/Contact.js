import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  background: linear-gradient(to bottom, #F4F6F9, #D8E2E7);
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

const CalendlyContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContactMe = () => {
  return (
    <ContactContainer id="contact">
      <Heading>Contact Me</Heading>
      <Subheading>Schedule a Meeting</Subheading>
      <p>If you'd like to discuss a project or have a virtual meeting, please use the scheduler below to choose a time slot:</p>
      <CalendlyContainer>
        {/* Add your Calendly embed code here */}
        <iframe
          title="Calendly Scheduler"
          src="https://calendly.com/vincent-pellechia/30min"
          style={{ width: '100%', height: '400px', border: '0', borderRadius: '10px'}}
        ></iframe>
      </CalendlyContainer>
    </ContactContainer>
  );
};

export default ContactMe;