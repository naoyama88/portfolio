import React from 'react';
import Styled from 'styled-components';

import SampleImg from './sample.png';
import GonchaImg from './ScreenShot_Goncha.png';
import JPCANADAVANimg from './jpcanada_structure.png';
import BASEimg from './Experience/base.png';

const StyledProjectSection = Styled.section`
  padding: 30px;
  border-radius: 20px;
  box-shadow: -9px -9px 16px rgba(239, 242, 248, 0.5), 9px 9px 16px rgba(163, 177, 230, 0.5);
`;

const StyledH2 = Styled.h2`
  margin: 0;
  font-size: 48px;
  color: #0B5DF5;
  font-family: Viga, sans-serif;
  padding-bottom: 30px;
  line-height: 48px;
`;

const StyledH3 = Styled.h3`
  font-size: 24px;
  font-family: Viga, sans-serif;
  padding-bottom: 15px;
`;

const StyledEachList = Styled.li`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0 20px 30px 20px;
  word-wrap: break-word;
  width: 400px;
  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;

const StyledWholeUl = Styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  justify-content: space-around;
`;

const StyledUl = Styled.ul`
  /* padding: 0 20px; */
`;

const StyledLi = Styled.li`
  line-height: 24px;
  ::before {
    content: "❇️";
  }
`;

const StyledSkillLi = Styled.li`
  line-height: 24px;
`;

const EachProjectSection = Styled.section`
  padding-top: 10px;
  padding-bottom: 30px;
  width: 100%;
`;

const ProjectImg = Styled.img`
  width: 100%;
`;

const TopPicSection = Styled.div`
  /* width: 100%; */
`;

const ProjectSection = () => {
  return (
    <StyledProjectSection id="projects">
      <StyledH2>Projects</StyledH2>
      <StyledWholeUl>
        <StyledEachList>
          <TopPicSection>
            <ProjectImg src={SampleImg} alt="Sample image" />
          </TopPicSection>
          <EachProjectSection className="Portfolio">
            <StyledH3>Portfolio</StyledH3>
            <StyledUl>
              <StyledLi>My portfolio</StyledLi>
              <StyledLi>Personal Project</StyledLi>
              <StyledLi><a href="https://github.com/naoyama88/portfolio" rel="noopener noreferrer" target="_blank">https://github.com/naoyama88/portfolio</a></StyledLi>
              <StyledLi><a href="https://naoyama88.github.io/portfolio/" rel="noopener noreferrer" target="_blank">https://naoyama88.github.io/portfolio/</a></StyledLi>
            </StyledUl>
            <StyledUl>
              <StyledSkillLi>- React</StyledSkillLi>
              <StyledSkillLi>- Neumorphism UI</StyledSkillLi>
            </StyledUl>
          </EachProjectSection>
        </StyledEachList>
        <StyledEachList>
          <TopPicSection>
            <ProjectImg src={JPCANADAVANimg} alt="Structure of this app" />
          </TopPicSection>
          <EachProjectSection className="jpcanadavanjob">
            <StyledH3>JPCANADAVANJOB</StyledH3>
            <StyledUl>
              <StyledLi>Twitter Bot</StyledLi>
              <StyledLi>Personal Project</StyledLi>
              <StyledLi>
                Service URL (Twitter account):
                <br />
                <a href="https://twitter.com/jpcanadavanjob" rel="noopener noreferrer" target="_blank">https://twitter.com/jpcanadavanjob</a>
              </StyledLi>
              <StyledLi>
                Github URL:
                <br />
                <a href="https://github.com/naoyama88/jpcanadavanjob" rel="noopener noreferrer" target="_blank">https://github.com/naoyama88/jpcanadavanjob</a>
              </StyledLi>
            </StyledUl>
            <StyledUl>
              <StyledSkillLi>- PHP</StyledSkillLi>
              <StyledSkillLi>- Laravel</StyledSkillLi>
              <StyledSkillLi>- scraping</StyledSkillLi>
              <StyledSkillLi>- TwitterAPI</StyledSkillLi>
            </StyledUl>
          </EachProjectSection>
        </StyledEachList>
        <StyledEachList>
          <TopPicSection>
            <ProjectImg src={BASEimg} alt="Sample image" />
          </TopPicSection>
          <EachProjectSection className="base">
            <StyledH3>BASE</StyledH3>
            <StyledUl>
              <StyledLi>Chat Application (web)</StyledLi>
              <StyledLi>Work</StyledLi>
              <StyledLi><a href="https://base.town/" rel="noopener noreferrer" target="_blank">https://base.town/</a></StyledLi>
            </StyledUl>
            <StyledUl>
              <StyledSkillLi>- Go</StyledSkillLi>
              <StyledSkillLi>- React</StyledSkillLi>
              <StyledSkillLi>- WebSocket</StyledSkillLi>
              <StyledSkillLi>- Firebase</StyledSkillLi>
              <StyledSkillLi>- Couchbase</StyledSkillLi>
            </StyledUl>
          </EachProjectSection>
        </StyledEachList>
        <StyledEachList>
          <TopPicSection>
            <ProjectImg src={SampleImg} alt="Sample image" />
          </TopPicSection>
          <EachProjectSection className="Riddle">
            <StyledH3>Riddle</StyledH3>
            <StyledUl>
              <StyledLi>Riddle</StyledLi>
              <StyledLi>School Project</StyledLi>
              <StyledLi><a href="https://github.com/wadp413-January/midterm-team-d-riddle" rel="noopener noreferrer" target="_blank">https://github.com/wadp413-January/midterm-team-d-riddle</a></StyledLi>
              <StyledLi><a href="https://github.com/naoyama88/react-riddle" rel="noopener noreferrer" target="_blank">https://github.com/naoyama88/react-riddle</a></StyledLi>
            </StyledUl>
            <StyledUl>
              <StyledSkillLi>- Node.js</StyledSkillLi>
              <StyledSkillLi>- Express.js</StyledSkillLi>
              <StyledSkillLi>- React</StyledSkillLi>
              <StyledSkillLi>- MongoDB</StyledSkillLi>
            </StyledUl>
          </EachProjectSection>
        </StyledEachList>
        <StyledEachList>
          <TopPicSection>
            <ProjectImg src={GonchaImg} alt="Goncha image" />
          </TopPicSection>
          <EachProjectSection className="Goncha">
            <StyledH3>Goncha</StyledH3>
            <StyledUl>
              <StyledLi>Shop website</StyledLi>
              <StyledLi>School Project</StyledLi>
              <StyledLi><a href="https://naoyama88.github.io/Web-dev-class-group-app/" rel="noopener noreferrer" target="_blank">https://naoyama88.github.io/Web-dev-class-group-app/</a></StyledLi>
              <StyledLi><a href="https://github.com/naoyama88/Web-dev-class-group-app" rel="noopener noreferrer" target="_blank">https://github.com/naoyama88/Web-dev-class-group-app</a></StyledLi>
            </StyledUl>
            <StyledUl>
              <StyledSkillLi>- HTML</StyledSkillLi>
              <StyledSkillLi>- CSS</StyledSkillLi>
              <StyledSkillLi>- Vanilla JS</StyledSkillLi>
            </StyledUl>
          </EachProjectSection>
        </StyledEachList>
      </StyledWholeUl>
    </StyledProjectSection>
  );
};

export default ProjectSection;
