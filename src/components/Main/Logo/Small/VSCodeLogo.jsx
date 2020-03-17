import React from 'react';
import Styled from 'styled-components';

import Src from '../img/vscode.png';
import SmallLogoContainer from './SmallLogoContainer';

const StyledImg = Styled.img`
  width: 65%;
`;

const alt = 'VSCode logo';

const VSCodeLogo = () => {
  return (
    <SmallLogoContainer>
      <StyledImg src={Src} alt={alt} />
    </SmallLogoContainer>
  );
};

export default VSCodeLogo;
