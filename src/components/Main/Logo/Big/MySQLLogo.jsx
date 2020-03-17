import React from 'react';
import Styled from 'styled-components';

import Src from '../img/mysql.svg';
import LogoContainer from './LogoContainer';

const StyledImg = Styled.img`
  width: 90%;
`;

const alt = 'MySQL logo';

const MySQLLogo = () => {
  return (
    <LogoContainer>
      <StyledImg src={Src} alt={alt} />
    </LogoContainer>
  );
};

export default MySQLLogo;
