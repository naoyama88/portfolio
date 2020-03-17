import React from 'react';
import Styled from 'styled-components';

import Src from '../img/laravel.png';
import LogoContainer from './LogoContainer';

const StyledImg = Styled.img`
  width: 70%;
`;

const alt = ''; // TODO

const LaravelLogo = () => {
  return (
    <LogoContainer>
      <StyledImg src={Src} alt={alt} />
    </LogoContainer>
  );
};

export default LaravelLogo;
