import React from 'react';
import Styled from 'styled-components';

import Src from '../img/git.png';
import SmallLogoContainer from './SmallLogoContainer';

const StyledImg = Styled.img`
  width: 70%;
`;

const alt = 'Git logo';

const GitLogo = () => {
  return (
    <SmallLogoContainer>
      <StyledImg src={Src} alt={alt} />
    </SmallLogoContainer>
  );
};

export default GitLogo;
