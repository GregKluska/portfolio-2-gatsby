import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;

  display: flex;

  padding: 30px 0;
  margin: 0 65px;
`;

const Navbar = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navbar;
