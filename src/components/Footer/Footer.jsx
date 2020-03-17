import React from 'react';
import Styled from 'styled-components';

const StyledFooter = Styled.footer`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      Marcus Naoya Araki © Copyright 2020 Created with
      <span role="img" aria-label="Heart">❤️</span>
    </StyledFooter>
  );
};

export default Footer;
