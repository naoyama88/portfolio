import React from 'react';
import Styled from 'styled-components';

import Src from '../img/docker.png';
import SmallLogoContainer from './SmallLogoContainer';

const StyledImg = Styled.img`
  width: 80%;
`;

const alt = 'Docker logo';

const DockerLogo = () => {
  return (
    <SmallLogoContainer>
      <StyledImg src={Src} alt={alt} />
    </SmallLogoContainer>
  );
};

export default DockerLogo;
