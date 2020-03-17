import React from 'react';
import Styled from 'styled-components';

import Src from '../img/npm.png';
import SmallLogoContainer from './SmallLogoContainer';

const StyledImg = Styled.img`
  width: 80%;
`;

const alt = 'Npm logo';

const NpmLogo = () => {
  return (
    <SmallLogoContainer>
      <StyledImg src={Src} alt={alt} />
    </SmallLogoContainer>
  );
};

export default NpmLogo;
