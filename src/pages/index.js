import React, { useState } from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import { up } from 'styled-breakpoints';

import Layout from '~components/Layout/Layout';
import Container from '~components/Layout/Container';
import Col from '~components/Layout/Col';

import Hero from '~components/Hero/Hero';
import AboutMe from '~components/Section/AboutMe';
import Experience from '~components/Section/Experience';
import Education from '~components/Section/Education';

import * as mixins from '~styles/mixins';

const HeroWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 50px - 90px);

  flex-grow: 1;
  flex-shrink: 0;

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

const Row = styled.div`
  ${mixins.makeRow()}

  ${({ section }) => section && `margin-top: 80px; margin-bottom: 160px;`}
`;

const IndexPage = () => {
  const [typistIndex, setTypistIndex] = useState(0);

  return (
    <Layout>
      <HeroWrapper id="hero">
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
      </HeroWrapper>
      <Container id="about-me">
        <Row section>
          <Col>
            <AboutMe />
          </Col>
        </Row>
        <Row section>
          <Col lg={6}>
            <Experience />
          </Col>
          <Col lg={6}>
            <Education />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default IndexPage;
