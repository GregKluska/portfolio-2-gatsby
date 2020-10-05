import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div``;

const HeroText = styled.h1`
  text-transform: uppercase;
  font-size: 4rem;

  margin-top: 0.4em;
  margin-bottom: 0.4em;
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
