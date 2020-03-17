import React from 'react';
import Styled from 'styled-components';

import Src from '../img/composer.png';
import SmallLogoContainer from './SmallLogoContainer';

const StyledImg = Styled.img`
  width: 70%;
`;

const alt = 'Composer logo';

const ComposerLogo = () => {
  return (
    <SmallLogoContainer>
      <StyledImg src={Src} alt={alt} />
    </SmallLogoContainer>
  );
};

export default ComposerLogo;
