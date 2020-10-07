import React, { useState } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import Logo from '~components/Logo/Logo';
import Menu from '~components/Menu/Menu';

import Hamburger from '~components/Menu/Hamburger';

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;

  display: flex;

  z-index: 10;

  padding: 30px 20px;

  ${up('md')} {
    padding: 30px 65px;
  }
`;

const HamburgerBtn = styled(Hamburger)`
  ${up('md')} {
    display: none;
  }
`;

const Placeholder = styled.div`
  display: flex;
  flex-grow: 1;

  ${up('md')} {
    display: none;
  }
`;

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <Wrapper>
      <Logo />
      <Menu active={menuState} />
      <Placeholder />
      <HamburgerBtn onClick={() => setMenuState(!menuState)} active={menuState} />
    </Wrapper>
  );
};

export default Navbar;
