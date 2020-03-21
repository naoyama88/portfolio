import React from 'react';
import Styled, { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 18px;
  }
  body {
    margin: 0;
    background-color: #E0E5EC;
    color: #383D3F;
    font-family: 'Poppins', sans-serif;
    font-size: 1em;
    line-height: 1em;
    word-wrap: break-word;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
  }
  a {
    cursor: pointer;
  }

  a::link,
  a::visited {
    color: #E0E5EC;
    text-decoration: none;
  }

  a::hover {
    opacity: .9;
    text-decoration: underline;
  }

  h1,h2,h3,h4,h5, h6 {
    font-weight: unset;
  }

  ul {
    list-style-type: none;
  }

  #root {
    font-size: 18px;
  }
`;

const Container = Styled.div`
  padding: 40px 8vw;
`;

const App = () => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Header />
      <Container>
        <Main />
        <Footer />
      </Container>
    </>
  );
};

export default App;
