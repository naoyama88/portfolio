import React from 'react';
import Styled from 'styled-components';

import Src from '../img/Oh_My_Zsh_logo.png';
import SmallLogoContainer from './SmallLogoContainer';

const StyledImg = Styled.img`
  width: 78%;
`;

const alt = 'OhMyZsh logo';

const OhMyZshLogo = () => {
  return (
    <SmallLogoContainer>
      <StyledImg src={Src} alt={alt} />
    </SmallLogoContainer>
  );
};

export default OhMyZshLogo;
