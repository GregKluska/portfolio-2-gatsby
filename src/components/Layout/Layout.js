import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

import theme from '~styles/theme';
import Navbar from '~components/Layout/Navbar';
import Content from '~components/Layout/Content';
import Background from '~util/background';

import '~styles/font.css';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Roboto Mono';
    color: ${theme.colors.primary};
    background: ${theme.colors.background};

    line-height: 1.8em;
    font-weight: 400;
  }

`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyles />
      <Background />
      <Wrapper>
        <Navbar />
        <Content>{children}</Content>
      </Wrapper>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
