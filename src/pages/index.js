import React, { useState } from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import { up } from 'styled-breakpoints';

import Layout from '~components/Layout/Layout';
import Hero from '~components/Hero/Hero';

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  flex-grow: 1;

  align-items: center;
  justify-content: center;

  transform: translateY(-100px);

  padding: 4rem;
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
