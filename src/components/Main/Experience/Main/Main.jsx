import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

import Projects from './Projects';
import Skills from './Skills';

const StyledMain = Styled.main`
  padding-left: 10px;
  padding-bottom: 30px;
`;

const StyledArticle = Styled.article`
  padding-bottom: 20px;
`;

const StyledH3 = Styled.h3`
  font-family: Viga, sans-serif;
  font-size: 24px;
  line-height: 24px;
  padding-bottom: 20px;
`;

const Main = (props) => {
  const { projects, experience } = props;
  return (
    <StyledMain>
      <StyledArticle>
        <StyledH3>{projects.title}</StyledH3>
        <Projects projects={projects} />
      </StyledArticle>
      <StyledArticle>
        <StyledH3>What I Experienced</StyledH3>
        <Skills experience={experience} />
      </StyledArticle>
    </StyledMain>
  );
};

Main.propTypes = {
  projects: PropTypes.shape({
    title: PropTypes.string,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    projects: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      descriptions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      })).isRequired,
    })).isRequired,
  }).isRequired,
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

export default Main;
