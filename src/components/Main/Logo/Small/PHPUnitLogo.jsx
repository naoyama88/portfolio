import React from 'react';
import Styled from 'styled-components';

import Src from '../img/phpunit.png';
import SmallLogoContainer from './SmallLogoContainer';

const StyledImg = Styled.img`
  width: 95%;
`;

const alt = 'PHPUnit logo';

const PHPUnitLogo = () => {
  return (
    <SmallLogoContainer>
      <StyledImg src={Src} alt={alt} />
    </SmallLogoContainer>
  );
};

export default PHPUnitLogo;
