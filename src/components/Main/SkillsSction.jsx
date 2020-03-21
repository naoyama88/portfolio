import React from 'react';
import Styled from 'styled-components';

import PHPLogo from './Logo/Big/PHPLogo';
import LaravelLogo from './Logo/Big/LaravelLogo';
import JSLogo from './Logo/Big/JSLogo';
import ReactLogo from './Logo/Big/ReactLogo';
// import ReduxLogo from './Logo/Big/ReduxLogo';
// import NodejsLogo from './Logo/Big/NodejsLogo';
// import MySQLLogo from './Logo/Big/MySQLLogo';
// import HTML5Logo from './Logo/Big/HTML5Logo';
// import CSS3Logo from './Logo/Big/CSS3Logo';
// import JQueryLogo from './Logo/Big/JQueryLogo';

// import GitLogo from './Logo/Small/GitLogo';
// import GithubLogo from './Logo/Small/GithubLogo';
// import SourceTreeLogo from './Logo/Small/SourceTreeLogo';
// import OhMyZshLogo from './Logo/Small/OhMyZshLogo';
// import VSCodeLogo from './Logo/Small/VSCodeLogo';
// import FigmaLogo from './Logo/Small/FigmaLogo';
// import ESLintLogo from './Logo/Small/ESLintLogo';
// import NpmLogo from './Logo/Small/NpmLogo';
// import ComposerLogo from './Logo/Small/ComposerLogo';
// import PHPUnitLogo from './Logo/Small/PHPUnitLogo';
// import DockerLogo from './Logo/Small/DockerLogo';
// import VagrantLogo from './Logo/Small/VagrantLogo';

const StyledH2 = Styled.h2`
  margin: 0;
  font-size: 48px;
  line-height: 48px;
  color: #0B5DF5;
  font-family: Viga, sans-serif;
  padding-bottom: 20px;
`;

// const StyledH3 = Styled.h3`
//   margin: 0;
//   font-size: 24px;
//   padding-bottom: 30px;
// `;

const StyledBigLogoUl = Styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* padding: 0 10px; */
  justify-content: space-around;
`;

const StyledBigLogoLi = Styled.li`
  padding: 20px 0;
`;

// const StyledSmallLogoUl = Styled.ul`
//   display: grid;
//   grid-template-columns: auto auto auto auto auto auto;
//   row-gap: 40px
// `;

const StyledSkillsSection = Styled.section`
  padding: 30px;
`;

const StyledMainSkillsSection = Styled.section`
  padding-bottom: 70px;
`;

// const StyledSubSkillsSection = Styled.section`
//   padding-bottom: 20px;
// `;

const SkillsSection = () => {
  return (
    <StyledSkillsSection id="skills">
      <StyledMainSkillsSection>
        <StyledH2>Skills</StyledH2>
        <div>
          <StyledBigLogoUl>
            <StyledBigLogoLi><JSLogo /></StyledBigLogoLi>
            <StyledBigLogoLi><ReactLogo /></StyledBigLogoLi>
            <StyledBigLogoLi><PHPLogo /></StyledBigLogoLi>
            <StyledBigLogoLi><LaravelLogo /></StyledBigLogoLi>
          </StyledBigLogoUl>
        </div>
      </StyledMainSkillsSection>
      {/* <StyledSubSkillsSection>
        <StyledH3>With support skills</StyledH3>
        <div>
          <StyledSmallLogoUl>
            <li><GitLogo /></li>
            <li><GithubLogo /></li>
            <li><SourceTreeLogo /></li>
            <li><OhMyZshLogo /></li>
            <li><VSCodeLogo /></li>
            <li><FigmaLogo /></li>
            <li><ESLintLogo /></li>
            <li><NpmLogo /></li>
            <li><ComposerLogo /></li>
            <li><PHPUnitLogo /></li>
            <li><DockerLogo /></li>
            <li><VagrantLogo /></li>
          </StyledSmallLogoUl>
        </div>
      </StyledSubSkillsSection> */}
    </StyledSkillsSection>
  );
};

export default SkillsSection;
