/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css } from 'styled-components';

const ButtonCss = css`
  background: ${({ theme }) => theme.colors.primary};
  color: white;

  font-size: 13px;
  padding: 0px 15px;
  margin-top: 20px;

  display: inline-block;
  text-decoration: none;

  cursor: pointer;
`;

const ButtonLink = styled.a`
  ${ButtonCss}
`;

const Button = styled.span`
  ${ButtonCss}
`;

export const CustomButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

const ButtonComponent = ({ children, ...props }) => {
  return <ButtonLink {...props}>{children}</ButtonLink>;
};

export default ButtonComponent;
