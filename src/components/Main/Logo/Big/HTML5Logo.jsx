import React from 'react';
import Styled from 'styled-components';

import Src from '../img/html5.png';
import LogoContainer from './LogoContainer';

const StyledImg = Styled.img`
  width: 60%;
`;

const alt = 'HTML5 logo';

const HTML5Logo = () => {
  return (
    <LogoContainer>
      <StyledImg src={Src} alt={alt} />
    </LogoContainer>
  );
};

export default HTML5Logo;
