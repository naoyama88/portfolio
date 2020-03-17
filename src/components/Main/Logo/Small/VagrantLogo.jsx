import React from 'react';
import Styled from 'styled-components';

import Src from '../img/vagrant.png';
import SmallLogoContainer from './SmallLogoContainer';

const StyledImg = Styled.img`
  width: 62%;
`;

const alt = 'Vagrant logo';

const VagrantLogo = () => {
  return (
    <SmallLogoContainer>
      <StyledImg src={Src} alt={alt} />
    </SmallLogoContainer>
  );
};

export default VagrantLogo;
