import React, { useState } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import Logo from '~components/Logo/Logo';
import Menu from '~components/Menu/Menu';

import Hamburger from '~components/Menu/Hamburger';

const Wrapper = styled.div`
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;

  z-index: 10;

  padding: 30px 10px;

  background: ${({ theme }) => theme.colors.background};

  ${up('lg')} {
    overflow: hidden;
    padding: 30px 65px;
  }
`;

const HamburgerBtn = styled(Hamburger)`
  ${up('md')} {
    display: none;
  }
`;

const FlexGrow = styled.div`
  display: flex;
  flex-grow: 1;

  ${up('md')} {
    display: none;
  }
`;

const Placeholder = styled.div`
  height: 90px;
  width: 100%;
  flex-shrink: 0;
`;

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <>
      <Wrapper>
        <Logo />
        <Menu active={menuState} onMenuItemClickHandler={setMenuState} />
        <FlexGrow />
        <HamburgerBtn onClick={() => setMenuState(!menuState)} active={menuState} />
      </Wrapper>
      <Placeholder />
    </>
  );
};

export default Navbar;
