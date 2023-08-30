// ProjectCard.js

import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectModal from './ProjectModal'; // Import the ProjectModal component

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectCard = ({ project }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Card onClick={openModal}>
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
      </Card>
      {isModalOpen && <ProjectModal project={project} onClose={closeModal} />}
    </>
  );
};

export default ProjectCard;