import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ children }) => {
  return <>{children}</>;
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
