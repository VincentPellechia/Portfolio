import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.section`
  text-align: center;
  padding: 2rem;
`;

const ProjectCard = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
`;

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A web application for...',
      link: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      description: 'A mobile app that...',
      link: 'https://github.com/yourusername/project2',
    },
    // Add more projects here
  ];

  return (
    <ProjectContainer id="projects">
      <h2>Projects</h2>
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </ProjectCard>
        ))}
      </div>
    </ProjectContainer>
  );
};

export default Projects;