import React, { useState } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import * as mixins from '~styles/mixins';

const Wrapper = styled.div`
  width: 100%;
  height: 50px;

  position: fixed;
  bottom: 0;
  left: 0;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  ${mixins.makeContainer()}
`;

const Placeholder = styled.div`
  height: 50px;
  width: 100%;

  flex-shrink: 0;
`;

const Footer = () => {
  return (
    <>
      <Wrapper>
        <Container>Footer</Container>
      </Wrapper>
      <Placeholder />
    </>
  );
};

export default Footer;
