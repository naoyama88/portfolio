import React, { useState } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

import Header from './Header';
import Main from './Main/Main';

const ShowMoreDiv = Styled.div`
  cursor: pointer;
  margin-bottom: 20px;
  transition: all .5s;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledSpan = Styled.span`
  text-decoration: underline;
`;

const Experience = (props) => {
  const [isHidden, setHidden] = useState(true);
  const { experienceProps } = props;
  const {
    title, location, term, url, tldrs, projects, experience,
  } = experienceProps;
  return (
    <section>
      <Header
        title={title}
        location={location}
        term={term}
        url={url}
        tldrs={tldrs}
      />
      {isHidden
        ? (
          <>
            <ShowMoreDiv
              onClick={() => setHidden(false)}
              onKeyDown={() => {}}
              onKeyUp={() => setHidden(false)}
              onKeyPress={() => {}}
              role="button"
              tabIndex={0}
            >
              <StyledSpan>Show more...</StyledSpan>
            </ShowMoreDiv>
            <div style={{ display: 'none' }}>
              <Main projects={projects} experience={experience} />
            </div>
          </>
        ) : (
          <>
            <ShowMoreDiv
              onClick={() => setHidden(true)}
              onKeyDown={() => {}}
              onKeyUp={() => setHidden(true)}
              onKeyPress={() => {}}
              role="button"
              tabIndex={0}
            >
              <StyledSpan>Hide</StyledSpan>
            </ShowMoreDiv>
            <div style={{ display: 'block' }}>
              <Main projects={projects} experience={experience} />
            </div>
          </>
        )}
    </section>
  );
};

Experience.propTypes = {
  experienceProps: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    term: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    tldrs: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })).isRequired,
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
  }).isRequired,
};

export default Experience;
