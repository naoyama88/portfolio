import React from 'react';
import Styled from 'styled-components';

import Src from '../img/css3.png';
import LogoContainer from './LogoContainer';

const StyledImg = Styled.img`
  width: 78%;
`;

const alt = 'CSS3 logo';

const CSS3Logo = () => {
  return (
    <LogoContainer>
      <StyledImg src={Src} alt={alt} />
    </LogoContainer>
  );
};

export default CSS3Logo;
