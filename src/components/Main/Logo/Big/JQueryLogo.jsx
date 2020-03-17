import React from 'react';
import Styled from 'styled-components';

import Src from '../img/jquery.png';
import LogoContainer from './LogoContainer';

const StyledImg = Styled.img`
  width: 65%;
`;

const alt = 'jQuery logo';

const JQueryLogo = () => {
  return (
    <LogoContainer>
      <StyledImg src={Src} alt={alt} />
    </LogoContainer>
  );
};

export default JQueryLogo;
