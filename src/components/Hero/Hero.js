import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

const Wrapper = styled.div``;

const HeroText = styled.h1`
  text-transform: uppercase;
  font-size: 3rem;
  line-height: 1.2em;

  margin-top: 0em;
  margin-bottom: 0em;

  text-align: center;

  ${up('md')} {
    font-size: 4rem;
  }
`;

const Hero = ({ children }) => {
  return (
    <Wrapper>
      <HeroText>{children}</HeroText>
    </Wrapper>
  );
};

Hero.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Hero;
