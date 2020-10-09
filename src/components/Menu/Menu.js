import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import { Link } from 'gatsby';

const Wrapper = styled.div`
  width: 100%;

  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  bottom: 100%;
  left: 0;
  background: ${({ theme }) => theme.colors.background};
  padding-top: 88px;
  padding-bottom: 30px;
  border-bottom: 1px solid #2b2e4d;

  transition: transform 0.5s ease-in-out;

  ${up('md')} {
    background: transparent;
    transition: initial;
  }

  ${({ active }) => active === true && `transform: translateY(100%);`}

  ${up('md')} {
    width: auto;
    position: initial;
    flex-direction: row;
    align-items: initial;
    justify-content: flex-end;
    border-bottom: 0;

    margin-left: -20px;
    margin-right: -20px;
    padding: 0;

    transform: initial;
  }
`;

const Item = styled(Link)`
  padding-left: 20px;
  padding-right: 20px;

  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  padding-top: 10px;
  padding-bottom: 10px;

  ${up('md')} {
    padding-top: 0;
    padding-bottom: 0;
  }

  &:hover {
    font-weight: 700;
    ${up('md')} {
      font-weight: 400;
      text-shadow: 0px 0px 1px ${({ theme }) => theme.colors.primary};
    }
  }

  &[aria-current='page'] {
    text-decoration: underline;
  }
`;

const Menu = ({ active }) => {
  return (
    <Wrapper active={active}>
      <Item to="/">Home</Item>
      <Item to="/about-me">About me</Item>
      <Item to="/portfolio">My Projects</Item>
      <Item to="/contact-me">Contact</Item>
    </Wrapper>
  );
};

Menu.defaultProps = {
  active: false,
};

Menu.propTypes = {
  active: PropTypes.bool,
};

export default Menu;
