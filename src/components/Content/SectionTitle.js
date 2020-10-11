import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

const Wrapper = styled.div`
  margin-bottom: 30px;
  display: block;

  text-align: center;
  ${up('sm')} {
    text-align: left;
  }
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 400;

  margin: 0;

  text-transform: uppercase;
`;

const SectionTitle = ({ children }) => {
  return (
    <Wrapper>
      <Title>{children}</Title>
    </Wrapper>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionTitle;
