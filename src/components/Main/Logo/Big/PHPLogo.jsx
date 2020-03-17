import React from 'react';
import Styled from 'styled-components';

import Src from '../img/php.svg';
import LogoContainer from './LogoContainer';

const StyledImg = Styled.img`
  width: 80%;
`;

const alt = 'Php logo';

const PHPLogo = () => {
  return (
    <LogoContainer>
      <StyledImg src={Src} alt={alt} />
    </LogoContainer>
  );
};

export default PHPLogo;
