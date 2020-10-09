import React, { useState } from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import { up } from 'styled-breakpoints';

import Layout from '~components/Layout/Layout';
import Hero from '~components/Hero/Hero';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  flex-grow: 1;

  padding: 0 3rem 5rem 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledTypist = styled(Typist)`
  font-size: 14px;
  text-align: center;

  padding-top: 10px;

  ${up('md')} {
    padding-top: 0px;
    font-size: 16px;
  }
`;

const IndexPage = () => {
  const [typistIndex, setTypistIndex] = useState(0);

  return (
    <Layout>
      <Wrapper>
        <Hero>I&apos;m Greg Kluska</Hero>
        <StyledTypist
          avgTypingDelay={50}
          key={typistIndex}
          onTypingDone={() => setTypistIndex(typistIndex + 1)}
        >
          {[
            'Android Developer',
            'Frontend and Backend Developer',
            'Based in Manchester',
          ].map((word) => [
            <span>{word}</span>,
            <Typist.Backspace count={word.length} delay={1000} />,
          ])}
        </StyledTypist>
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
