import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledUl = Styled.ul`
  padding-right: 30px;
`;

const StyledLi = Styled.li`
  margin-top: 5px;
  &:before {
    content: "- ";
    text-indent: -5px;
  }
`;

const SkillContainer = Styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: flex-start;
`;

const TechSkillContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 40px;
`;

const StyledH5 = Styled.h5`
  font-size: 18px;
  padding-bottom: 10px;
`;

const Skills = (props) => {
  const { experience } = props;
  return (
    <SkillContainer>
      <div>
        <StyledH5>Tech</StyledH5>
        <TechSkillContainer>
          <div>
            <h6>Front-end</h6>
            <StyledUl>
              {experience.tech.frontend.map((frontendSkill) => {
                return <StyledLi key={frontendSkill.id}>{frontendSkill.content}</StyledLi>;
              })}
            </StyledUl>
          </div>
          <div>
            <h6>Back-end</h6>
            <StyledUl>
              {experience.tech.backend.map((backendSkill) => {
                return <StyledLi key={backendSkill.id}>{backendSkill.content}</StyledLi>;
              })}
            </StyledUl>
          </div>
        </TechSkillContainer>
      </div>
      <div>
        <StyledH5>General</StyledH5>
        <ul>
          {experience.general.map((generalSkill) => {
            return <StyledLi key={generalSkill.id}>{generalSkill.content}</StyledLi>;
          })}
        </ul>
      </div>
    </SkillContainer>
  );
};

Skills.propTypes = {
  experience: PropTypes.shape({
    tech: PropTypes.shape({
      frontend: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      }).isRequired).isRequired,
      backend: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      }).isRequired).isRequired,
    }),
    general: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  }).isRequired,
};

export default Skills;
