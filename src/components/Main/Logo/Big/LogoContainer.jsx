import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContainer = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 180px;
  border-radius: 20px;
  box-shadow: -9px -9px 16px rgba(239,242,248,0.5), 9px 9px 16px rgba(163,177,230,0.5);
`;

const LogoContainer = (props) => {
  const { children } = props;
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
};

LogoContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
  ]).isRequired,
};

export default LogoContainer;
