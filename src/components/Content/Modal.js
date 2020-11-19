import React, { useContext } from 'react';
import styled from 'styled-components';
import PortfolioContext from '~contexts/PortfolioContext';

import * as mixins from '~styles/mixins';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 99;

  display: flex;
  opacity: 0;
  pointer-events: none;

  align-items: center;
  justify-content: center;

  padding-left: 5px;
  padding-right: 5px;

  transition: 0.4s opacity ease-in-out;

  &.open {
    pointer-events: auto;
    opacity: 1;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: -1;
  background: #000;
  opacity: 0.2;
  transition: 0.4s ease-in-out opacity;
`;

const Container = styled.div`
  ${mixins.makeContainer()}
  ${mixins.makeContainerMaxWidths()}

  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;

  position: relative;

  min-height: 300px;
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 30px;

  background: pink;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

const Modal = () => {
  const { state, dispatch } = useContext(PortfolioContext);

  return (
    <Wrapper className={state.modal && 'open'}>
      <Background />
      <Container>
        <CloseButton onClick={() => dispatch({ type: 'closeDetails' })} />
      </Container>
    </Wrapper>
  );
};

export default Modal;
