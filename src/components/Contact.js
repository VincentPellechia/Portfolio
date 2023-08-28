import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  text-align: center;
  padding: 2rem;
`;

const ContactForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to use the form below or reach out to me on social media.</p>
      
      <ContactForm>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required />
        </div>
        <button type="submit">Send Message</button>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;