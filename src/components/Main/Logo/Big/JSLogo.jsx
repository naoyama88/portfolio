import React from 'react';
import Styled from 'styled-components';

import Src from '../img/js.png';
import LogoContainer from './LogoContainer';

const StyledImg = Styled.img`
  width: 70%;
`;

const alt = 'js logo';

const JSLogo = () => {
  return (
    <LogoContainer>
      <StyledImg src={Src} alt={alt} />
    </LogoContainer>
  );
};

export default JSLogo;
