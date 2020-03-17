import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeader = Styled.header`
  padding-bottom: 20px;
`;

const StyledH3 = Styled.h3`
  margin: 0;
  font-size: 24px;
  line-height: 24px;
  padding-bottom: 10px;
  font-family: Viga, sans-serif;
  text-decoration: underline;
`;

const MainInfoUl = Styled.ul`
  display: flex;
  margin: 0;
  padding: 0 0 14px 0;
`;

const MainInfoLi = Styled.li`
  font-size: 14px;
  line-height: 14px;
  font-family: Viga, sans-serif;
  font-weight: bold;
  padding-right: 20px;
`;

const StyledParagraph = Styled.p`
  margin: 0;
  padding-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
`;

const StyledAnchor = Styled.a`
  &:link {
    color: #383D3F;
    text-decoration:underline;
  }
  &:visited {
    color: #383D3F;
    text-decoration:underline;
  }
`;

const Header = (props) => {
  const {
    title, location, term, url, tldrs,
  } = props;
  return (
    <StyledHeader>
      <StyledH3>{title}</StyledH3>
      <MainInfoUl>
        <MainInfoLi>{location}</MainInfoLi>
        <MainInfoLi>{term}</MainInfoLi>
        <MainInfoLi><StyledAnchor href={url} rel="noopener noreferrer" target="_blank">{url}</StyledAnchor></MainInfoLi>
      </MainInfoUl>
      {tldrs.map((tldr) => {
        return (
          <StyledParagraph key={tldr.id}>
            <span role="img" aria-label="finger">☝️</span>
            {tldr.content}
          </StyledParagraph>
        );
      })}
    </StyledHeader>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  term: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  tldrs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};

export default Header;
