import React from 'react';
import Styled from 'styled-components';

const StyledHeader = Styled.header`
  width: 100%;
  font-family: Viga, sans-serif;
  color: #0B5DF5;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 70px;
`;

const StyledH1 = Styled.h1`
  margin: 0;
  font-size: 56px;
  line-height: 56px;
`;

const StyledNav = Styled.nav`
  /* margin-top: 50px; */
`;

const StyledUl = Styled.ul`
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  font-size: 26px;
`;

const StyledLi = Styled.li`
  /* float: right; */
`;

const StyledLink = Styled.a`
  color: #0B5DF5;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledH1>Marcus</StyledH1>
      <StyledNav>
        <StyledUl>
          <StyledLi><StyledLink href="#skills">Skills</StyledLink></StyledLi>
          <StyledLi><StyledLink href="#experience">Experience</StyledLink></StyledLi>
          <StyledLi><StyledLink href="#projects">Projects</StyledLink></StyledLi>
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
