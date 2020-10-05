import React, { useState } from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';

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
`;

const IndexPage = () => {
  const [typistIndex, setTypistIndex] = useState(0);

  return (
    <Layout>
      <Wrapper>
        <Hero>I&apos;m Greg Kluska</Hero>
        <Typist key={typistIndex} onTypingDone={() => setTypistIndex(typistIndex + 1)}>
          {[
            'Android developer',
            'Frontend and Backend developer',
            'Based in Manchester',
          ].map((word) => [
            <span>{word}</span>,
            <Typist.Backspace count={word.length} delay={1000} />,
          ])}
        </Typist>
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;
