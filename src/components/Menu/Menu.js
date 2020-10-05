import React from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';

const Wrapper = styled.div`
  width: auto;

  flex-grow: 1;

  display: flex;
  justify-content: flex-end;

  margin-left: -20px;
  margin-right: -20px;
`;

const Item = styled(Link)`
  padding-left: 20px;
  padding-right: 20px;

  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  &:hover {
    font-weight: 700;
  }

  &[aria-current='page'] {
    text-decoration: underline;
  }
`;

const Menu = () => {
  return (
    <Wrapper>
      <Item to="/">Home</Item>
      <Item to="/about-me">About me</Item>
      <Item to="/portfolio">My Projects</Item>
      <Item to="/contact-me">Contact</Item>
    </Wrapper>
  );
};

export default Menu;
