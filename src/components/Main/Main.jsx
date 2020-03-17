import React from 'react';
import Styled from 'styled-components';

import HeroSection from './HeroSection';
import SkillsSection from './SkillsSction';
import ExperienceSection from './ExperienceSection';
import ProjectSection from './ProjectSection';

const StyledMain = Styled.main`
  padding-bottom: 40px;
`;

const Main = () => {
  return (
    <StyledMain>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectSection />
    </StyledMain>
  );
};

export default Main;
