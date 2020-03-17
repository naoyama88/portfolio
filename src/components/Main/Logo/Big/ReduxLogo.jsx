import React from 'react';
import Styled from 'styled-components';

import Src from '../img/Redux.png';
import LogoContainer from './LogoContainer';

const StyledImg = Styled.img`
  width: 90%;
`;

const alt = 'Redux logo';

const ReduxLogo = () => {
  return (
    <LogoContainer>
      <StyledImg src={Src} alt={alt} />
    </LogoContainer>
  );
};

export default ReduxLogo;
