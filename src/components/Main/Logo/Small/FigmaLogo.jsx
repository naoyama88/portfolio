import React from 'react';
import Styled from 'styled-components';

import Src from '../img/figma.png';
import SmallLogoContainer from './SmallLogoContainer';

const StyledImg = Styled.img`
  width: 95%;
`;

const alt = 'Figma logo';

const FigmaLogo = () => {
  return (
    <SmallLogoContainer>
      <StyledImg src={Src} alt={alt} />
    </SmallLogoContainer>
  );
};

export default FigmaLogo;
