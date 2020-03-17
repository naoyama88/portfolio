import React from 'react';
import Styled from 'styled-components';

import Src from '../img/nodejs.png';
import LogoContainer from './LogoContainer';

const StyledImg = Styled.img`
  width: 75%;
`;

const alt = 'Node.js logo';

const NodejsLogo = () => {
  return (
    <LogoContainer>
      <StyledImg src={Src} alt={alt} />
    </LogoContainer>
  );
};

export default NodejsLogo;
