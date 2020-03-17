import React from 'react';
import Styled from 'styled-components';

import Src from '../img/react.png';
import LogoContainer from './LogoContainer';

const StyledImg = Styled.img`
  width: 90%;
`;

const alt = 'React.js logo';

const ReactLogo = () => {
  return (
    <LogoContainer>
      <StyledImg src={Src} alt={alt} />
    </LogoContainer>
  );
};

export default ReactLogo;
