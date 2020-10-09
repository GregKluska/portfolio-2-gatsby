import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const moveUpThenDown = keyframes`
    0%{ top:0; }
    50%{ top:-27px;}
    100%{ top:-20px; }
`;

const shakeWhileMovingUp = keyframes`
    0%{ transform: rotateZ(0); }
    25%{ transform:rotateZ(-10deg); }
    50%{ transform:rotateZ(0deg); }
    75%{ transform:rotateZ(10deg); }
    100%{ transform:rotateZ(0); }
`;

const shakeWhileMovingDown = keyframes`
    0%{ transform:rotateZ(0); }
    80%{ transform:rotateZ(3deg); }
    90%{ transform:rotateZ(-3deg); }
    100%{ transform:rotateZ(0); }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TextBar = styled.div`
  top: 22px;

  &:before {
    content: 'BACK';
    position: absolute;
    top: 5px;
    right: 0;
    left: 0;
    color: #2b2e4d;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
  }
`;
const Label = styled.div`
  position: relative;
  display: block;
  height: 24px;
  cursor: pointer;

  &:before,
  &:after,
  ${TextBar} {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #2b2e4d;
  }
  &:before,
  &:after {
    content: '';
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) left;
  }
  &:before {
    top: 0;
  }

  &:after {
    top: 11px;
  }
`;

const Button = styled.div`
  width: 40px;
  overflow: hidden;

  &.active {
    ${Label}:before {
      left: -40px;
    }
    ${Label}:after {
      left: 40px;
    }
    ${TextBar}:before {
      animation: ${moveUpThenDown} 0.8s ease 0.2s forwards,
        ${shakeWhileMovingUp} 0.8s ease 0.2s forwards,
        ${shakeWhileMovingDown} 0.2s ease 0.8s forwards;
    }
  }
`;

const Hamburger = ({ active, ...props }) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Wrapper {...props}>
      <Button className={active === true && `active`}>
        <Label>
          <TextBar />
        </Label>
      </Button>
    </Wrapper>
  );
};

Hamburger.defaultProps = {
  active: false,
};

Hamburger.propTypes = {
  active: PropTypes.bool,
};

export default Hamburger;
