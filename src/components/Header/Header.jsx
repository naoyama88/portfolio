import React from 'react';
import Styled from 'styled-components';
import Media from 'react-media';
import { Link } from 'react-scroll';

const StyledHeader = Styled.header`
  width: 84vw;
  padding: 10px 8vw;
  font-family: Viga, sans-serif;
  color: #0B5DF5;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 70px;
  /* @media screen and (max-width: 768px) {
    position: relative;
  } */
  position: sticky;
  top: 0px;
  background-color: #E0E5EC;
  /* background-color: red; */
  /* box-shadow: 0px 2px 16px grey; */
  border-bottom: 1px solid #bfbfbf;
`;

const StyledH1 = Styled.h1`
  margin: 0;
  font-size: 56px;
  line-height: 56px;
`;

const StyledNav = Styled.nav`
  display: block;
  @media screen and (max-width: 768px) {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
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
      <Media queries={{
        small: '(max-width: 767px)',
        large: '(min-width: 768px)',
      }}
      >
        {(matches) => (
          <>
            {matches.small && <p>I am small!</p>}
            {matches.large && 
              <StyledNav>
                <StyledUl>
                  <StyledLi>
                    <Link
                      activeClass="active"
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration= {500}
                      style={{ color: '#0B5DF5', display: 'block', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}
                    >Skills</Link>
                  </StyledLi>
                  <StyledLi>
                    <Link
                      activeClass="active"
                      to="experience"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration= {500}
                      style={{ color: '#0B5DF5', display: 'block', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}
                    >Experience</Link>
                  </StyledLi>
                  <StyledLi>
                    <Link
                      activeClass="active"
                      to="projects"
                      spy={false}
                      smooth={true}
                      offset={-100}
                      duration= {500}
                      style={{ color: '#0B5DF5', display: 'block', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}
                    >Projects</Link>
                  </StyledLi>
                </StyledUl>
              </StyledNav>
            }
          </>
        )}
      </Media>
    </StyledHeader>
  );
};

export default Header;
