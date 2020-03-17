import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const baseStyles = () => createGlobalStyle`
  ${reset}
  html{
    font-size: 18px;
  }
  body {
    margin: 0;
    background-color: #E0E5EC;
    color: #383D3F;
    font-family: Poppins;
    font-size: 1em;
    line-height: 1em;
    word-wrap: break-word;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
  }
  a {
    cursor: pointer;

    &:link,
    &:visited {
      color: #E0E5EC;
      text-decoration: none;
    }

    &:hover {
      opacity: .9;
      text-decoration: underline;
    }
  }
  h1,h2,h3,h4,h5, h6 {
    font-weight: 800;
  }
  #root {
    font-size: 18px;
  }
`;

export default baseStyles;
