import React from 'react';
import Styled from 'styled-components';

import Src from '../img/eslint.svg';
import SmallLogoContainer from './SmallLogoContainer';

const StyledImg = Styled.img`
  width: 70%;
`;

const alt = 'ESLint logo';

const ESLintLogo = () => {
  return (
    <SmallLogoContainer>
      <StyledImg src={Src} alt={alt} />
    </SmallLogoContainer>
  );
};

export default ESLintLogo;
