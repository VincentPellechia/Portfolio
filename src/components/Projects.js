import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const ProjectContainer = styled.section`
  text-align: center;
  padding: 2rem;
`;

const projects = [
  {
    title: 'Project 1',
    shortDescription: 'A web application for...',
    description: 'A detailed description of Project 1...',
    link: 'https://github.com/yourusername/project1',
    pictures: ["pic1", "pic2"],
    videos: ["vid1"],

    // Add more project properties here
  },
  {
    title: 'Project 2',
    shortDescription: 'A mobile app that...',
    description: 'A detailed description of Project 2...',
    link: 'https://github.com/yourusername/project1',
    pictures: ["pic1", "pic2"],
    videos: ["vid1"],
    // Add more project properties here
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <ProjectContainer>
      <h2>Projects</h2>
      <div>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </ProjectContainer>
  );
};

export default Projects;