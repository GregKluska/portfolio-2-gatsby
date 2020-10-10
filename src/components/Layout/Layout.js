import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import theme from '~styles/theme';
import Navbar from '~components/Layout/Navbar';
import Background from '~util/background';

import '~styles/font.css';
import Footer from './Footer';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
  }
  html,
  body {
    scroll-behavior: smooth;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Rubik';
    color: ${theme.colors.primary};
    background: ${theme.colors.background};

    line-height: 1.8em;
    font-weight: 400;
  }

  p{
    font-size: 13px;
  }

`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Background />
        <Navbar />
        {children}
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
