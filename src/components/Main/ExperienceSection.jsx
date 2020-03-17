import React from 'react';
import Styled from 'styled-components';

import Experience from './Experience/Experience';
import ListOfExperience from './ListOfExperience';

const StyledExperienceSection = Styled.section`
  padding: 30px;
  border-radius: 20px;
  box-shadow: -9px -9px 16px rgba(239, 242, 248, 0.5), 9px 9px 16px rgba(163, 177, 230, 0.5);
  margin-bottom: 40px;
`;

const StyledH2 = Styled.h2`
  margin: 0;
  font-size: 48px;
  color: #0B5DF5;
  font-family: Viga, sans-serif;
  padding-bottom: 20px;
  line-height: 48px;
`;

const ExperienceSection = () => {
  return (
    <StyledExperienceSection id="experience">
      <StyledH2>Experience</StyledH2>
      {ListOfExperience.map((experience) => {
        return <Experience experienceProps={experience} key={experience.id} />;
      })}
    </StyledExperienceSection>
  );
};

export default ExperienceSection;
