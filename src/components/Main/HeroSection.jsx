import React from 'react';
import Styled from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';

import profilePic from './profile_pic2.png';
import githubPic from './github_mini.png';
import linkedinPic from './linkedin_clear.png';
// import facebookPic from './facebook_clear.png';
import resumePic from './resume_icon.png';

const StyledHeroSection = Styled.section`
  display: flex;
  justify-content: space-between;
  padding-bottom: 70px;
`;

const BorderAroundImage = Styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #E0E5EC;
  box-shadow: -9px -9px 16px rgba(239, 242, 248, 0.5), 9px 9px 16px rgba(163, 177, 230, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileImage = Styled.img`
  /* object-fit: cover;
  object-position: 50% 20; */
  width: 95%;
  height: 95%;
`;

const StyledImageSection = Styled.section`
  width: 300px;
  margin: 0 60px 0 20px;
`;

const StyledProfileSection = Styled.section`
  padding-top: 30px;
  width: 750px;
`;

const StyledH2 = Styled.h2`
  font-size: 54px;
  line-height: 54px;
  font-family: Viga, sans-serif;
  padding-bottom: 20px;
`;

const StyledH3 = Styled.h3`
  font-size: 24px;
  line-height: 24px;
  font-family: Viga, sans-serif;
  padding-bottom: 30px;
`;

const StyledP = Styled.p`
  font-size: 24px;
  line-height: 34px;
  padding-bottom: 20px;
`;

const StyledUl = Styled.ul`
  display: flex;
  justify-content: space-between;
`;

const ButtonImageContainer = Styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #E0E5EC;
  box-shadow: inset -4px -4px 16px rgba(239,242,248,0.8), inset 4px 4px 16px rgba(163,177,230,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonImageInnerContainer = Styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #E0E5EC;
  /* box-shadow: -5px -5px 8px rgba(239, 242, 248, 0.5), 5px 5px 8px rgba(163, 177, 230, 0.5); */
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: box-shadow .4s;
  &:hover {
    box-shadow: -5px -5px 8px rgba(239, 242, 248, 0.5), 5px 5px 8px rgba(163, 177, 230, 0.5);
  }
  &:active {
    transition: box-shadow .1s;
    box-shadow: none;
  }
`;

const GithubLogoImage = Styled.img`
  width: 65%;
`;

const LinkedInLogoImage = Styled.img`
  width: 85%;
`;

const ResumeLogoImage = Styled.img`
  width: 65%;
`;

const StyledLi = Styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StyledSpan = Styled.span`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
`;

const HeroSection = () => {
  return (
    <StyledHeroSection>
      <StyledImageSection>
        <BorderAroundImage>
          <ProfileImage src={profilePic} alt="Marcus" />
        </BorderAroundImage>
        <div>
          <StyledUl>
            <StyledLi>
              <StyledSpan>Github</StyledSpan>
              <ButtonImageContainer>
                <a href="https://github.com/naoyama88" rel="noopener noreferrer" target="_blank">
                  <ButtonImageInnerContainer>
                    <GithubLogoImage src={githubPic} alt="Image of Github to jump" />
                  </ButtonImageInnerContainer>
                </a>
              </ButtonImageContainer>
            </StyledLi>
            <StyledLi>
              <StyledSpan>LinkedIn</StyledSpan>
              <ButtonImageContainer>
                <a href="https://linkedin.com/in/marcus88ca" rel="noopener noreferrer" target="_blank">
                  <ButtonImageInnerContainer>
                    <LinkedInLogoImage src={linkedinPic} alt="Image of LinkedIn to jump" />
                  </ButtonImageInnerContainer>
                </a>
              </ButtonImageContainer>
            </StyledLi>
            <StyledLi>
              <StyledSpan>Resume</StyledSpan>
              <ButtonImageContainer>
                <a href="/portfolio/resume_marcus.pdf" rel="noopener noreferrer" target="_blank">
                  <ButtonImageInnerContainer>
                    <ResumeLogoImage src={resumePic} alt="Icon of Resume to jump" />
                  </ButtonImageInnerContainer>
                </a>
              </ButtonImageContainer>
            </StyledLi>
          </StyledUl>
        </div>
      </StyledImageSection>
      <StyledProfileSection>
        <StyledH2>Marcus Naoya Araki</StyledH2>
        <StyledH3>Web Developer</StyledH3>
        <StyledP>
          <p>Hi! I am Marcus.</p>
          <br />
          {/* A web developer with solid backend skills is looking for an
          opotunity to work as Front-end Developer (preffered).
          I can also work as a Full-stack Developer.
          Making web application with PHP was my area,
          and I’m currently working on Front-end stuff using React as JS framework. */}
          <p>
            A web developer with 4 years of experience as a web developer with a wide variety
            of tech skills gained through working on numerous contracts.
            Currently upgrading my skills by studying web front-end
            development and working at BASE.
          </p>
        </StyledP>
      </StyledProfileSection>
    </StyledHeroSection>
  );
};

export default HeroSection;
