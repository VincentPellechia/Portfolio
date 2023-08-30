import React from 'react';
import styled from 'styled-components';
import technologyImages from '../utils/images';

const SkillsContainer = styled.section`
  text-align: center;
  padding: 2rem;
`;

const SkillsCard = styled.div`
  border: 3px solid transparent;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  filter: grayscale(100%);
  transition: filter 0.5s;
  
  &:hover {
    filter: none;
    border: 3px solid;
  }
`;

const SkillTitle = styled.h3`
  margin-bottom: 1rem;
`;

const SkillIcon = styled.img`
  margin: 0.5rem;
  
`;

const Skills = () => {
  const skillCategories = [
    {
      title: 'Front End',
      technologies: ['react', 'html5', 'css', 'angular', 'ember', 'glimmer'],
      background: "var(--primary-color)",
    },
    {
      title: 'Back End',
      technologies: ['node', 'cs', 'php', 'java', 'cpp', 'mongodb', 'sql'],
      background: "var(--accent-color)",
    },
    {
      title: 'Miscellaneous',
      technologies: ['git', 'azure', 'aws'],
      background: "var(--secondary-color)",
    },
    // Add more skills here
  ];

  const renderTechnologyIcons = (technologies) => {
    return technologies.map((techName, index) => (
      <SkillIcon key={index} src={technologyImages[techName]} alt={techName} className="icon" width={60} height={60} />
    ));
  };

  return (
    <SkillsContainer id="skills">
      <h2>Skills</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {skillCategories.map((category, index) => (
          <SkillsCard style={{color: category.background}} key={index}>
            <SkillTitle>{category.title}</SkillTitle>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              {renderTechnologyIcons(category.technologies)}
            </div>
          </SkillsCard>
        ))}
      </div>
    </SkillsContainer>
  );
};

export default Skills;