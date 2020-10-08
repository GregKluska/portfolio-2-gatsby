import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.h2`
  font-size: 1rem;
  line-height: 1rem;
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
