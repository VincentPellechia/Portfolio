import React from 'react';
import styled from 'styled-components';
import angular from '../images/angular.png';
import aws from '../images/aws.png';
import azure from '../images/azure.png';
import cpp from '../images/cpp.png';
import cs from '../images/cs.png';
import css from '../images/css.png';
import ember from '../images/ember.png';
import git from '../images/git.png';
import glimmer from '../images/glimmer.png';
import html5 from '../images/html5.png';
import java from '../images/java.png';
import javascript from '../images/javascript.png';
import mongodb from '../images/mongodb.png';
import node from '../images/node.png';
import php from '../images/php.png';
import react from '../images/react.png';
import sql from '../images/sql.png';

const SkillsContainer = styled.section`
  text-align: center;
  padding: 2rem;
`;

const SkillsCard = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
  filter: grayscale(100%); /* Apply grayscale filter */
  transition: filter 0.3s; /* Add a transition effect */
  
  &:hover {
    filter: none; /* Remove filter on hover */
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
      technologies: [react, html5, css, angular, ember, glimmer],
    },
    {
      title: 'Back End',
      technologies: [node, cs, php, java, cpp, mongodb, sql],
    },
    {
      title: 'Miscellaneous',
      technologies: [git, azure, aws],
    },
    // Add more skills here
  ];

  const renderTechnologyIcons = (technologies) => {
    return technologies.map((techImage, index) => (
      <SkillIcon key={index} src={techImage} alt={techImage} className="icon" width={60} height={60} />
    ));
  };

  return (
    <SkillsContainer id="skills">
      <h2>Skills</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {skillCategories.map((category, index) => (
          <SkillsCard key={index}>
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