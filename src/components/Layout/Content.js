import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Content = ({ children }) => {
  return <div>{children}</div>;
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
