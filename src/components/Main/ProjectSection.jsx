import React from 'react';
import Styled from 'styled-components';

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

const StyledUl = Styled.ul`
  padding: 0 20px;
`;

const EachProjectSection = Styled.section`
  padding-bottom: 30px;
`;

const ProjectSection = () => {
  return (
    <StyledProjectSection id="projects">
      <StyledH2>Projects</StyledH2>
      <StyledUl>
        <li>
          <EachProjectSection className="Portfolio">
            <StyledH3>Portfolio</StyledH3>
            <StyledUl>
              <li>This Portfolio</li>
              <li>Personal Project</li>
              <li><a href="https://github.com/naoyama88/portfolio" rel="noopener noreferrer" target="_blank">https://github.com/naoyama88/portfolio</a></li>
              <li><a href="https://naoyama88.github.io/portfolio/" rel="noopener noreferrer" target="_blank">https://naoyama88.github.io/portfolio/</a></li>
            </StyledUl>
            <StyledUl>
              <li>- React</li>
            </StyledUl>
          </EachProjectSection>
        </li>
        <li>
          <EachProjectSection className="jpcanadavanjob">
            <StyledH3>JPCANADAVAN</StyledH3>
            <StyledUl>
              <li>Twitter Bot</li>
              <li>Personal Project</li>
              <li><a href="https://twitter.com/jpcanadavanjob" rel="noopener noreferrer" target="_blank">https://twitter.com/jpcanadavanjob</a></li>
              <li><a href="https://github.com/naoyama88/jpcanadavanjob" rel="noopener noreferrer" target="_blank">https://github.com/naoyama88/jpcanadavanjob</a></li>
            </StyledUl>
            <StyledUl>
              <li>- PHP</li>
              <li>- Laravel</li>
              <li>- scraping</li>
              <li>- TwitterAPI</li>
            </StyledUl>
          </EachProjectSection>
        </li>
        <li>
          <EachProjectSection className="base">
            <StyledH3>BASE</StyledH3>
            <StyledUl>
              <li>Chat Application (web)</li>
              <li>Work</li>
              <li><a href="https://base.town/" rel="noopener noreferrer" target="_blank">https://base.town/</a></li>
            </StyledUl>
            <StyledUl>
              <li>- Go</li>
              <li>- React</li>
              <li>- WebSocket</li>
              <li>- Firebase</li>
              <li>- Couchbase</li>
            </StyledUl>
          </EachProjectSection>
        </li>
        <li>
          <EachProjectSection className="Riddle">
            <StyledH3>Riddle</StyledH3>
            <StyledUl>
              <li>Riddle</li>
              <li>School Project</li>
              <li><a href="https://github.com/wadp413-January/midterm-team-d-riddle" rel="noopener noreferrer" target="_blank">https://github.com/wadp413-January/midterm-team-d-riddle</a></li>
              <li><a href="https://github.com/naoyama88/react-riddle" rel="noopener noreferrer" target="_blank">https://github.com/naoyama88/react-riddle</a></li>
            </StyledUl>
            <StyledUl>
              <li>- Node.js</li>
              <li>- Express.js</li>
              <li>- React</li>
              <li>- MongoDB</li>
            </StyledUl>
          </EachProjectSection>
        </li>
        <li>
          <EachProjectSection className="Goncha">
            <StyledH3>Goncha</StyledH3>
            <StyledUl>
              <li>Shop website</li>
              <li>School Project</li>
              <li><a href="https://naoyama88.github.io/Web-dev-class-group-app/" rel="noopener noreferrer" target="_blank">https://naoyama88.github.io/Web-dev-class-group-app/</a></li>
              <li><a href="https://github.com/naoyama88/Web-dev-class-group-app" rel="noopener noreferrer" target="_blank">https://github.com/naoyama88/Web-dev-class-group-app</a></li>
            </StyledUl>
            <StyledUl>
              <li>- HTML</li>
              <li>- CSS</li>
              <li>- Vanilla JS</li>
            </StyledUl>
          </EachProjectSection>
        </li>
      </StyledUl>
    </StyledProjectSection>
  );
};

export default ProjectSection;
