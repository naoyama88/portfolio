import React from 'react';
import Styled from 'styled-components';

import Src from '../img/github.svg';
import SmallLogoContainer from './SmallLogoContainer';

const StyledImg = Styled.img`
  width: 70%;
`;

const alt = 'Github logo';

const GithubLogo = () => {
  return (
    <SmallLogoContainer>
      <StyledImg src={Src} alt={alt} />
    </SmallLogoContainer>
  );
};

export default GithubLogo;
