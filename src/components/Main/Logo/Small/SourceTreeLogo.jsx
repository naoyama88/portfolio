import React from 'react';
import Styled from 'styled-components';

import Src from '../img/sourcetree.png';
import SmallLogoContainer from './SmallLogoContainer';

const StyledImg = Styled.img`
  width: 50%;
`;

const alt = 'SourceTree logo';

const SourceTreeLogo = () => {
  return (
    <SmallLogoContainer>
      <StyledImg src={Src} alt={alt} />
    </SmallLogoContainer>
  );
};

export default SourceTreeLogo;
