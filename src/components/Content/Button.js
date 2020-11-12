/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  background: ${({ theme }) => theme.colors.primary};
  color: white;

  font-size: 13px;
  padding: 0px 15px;
  margin-top: 20px;

  display: inline-block;
  text-decoration: none;
`;

const ButtonComponent = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default ButtonComponent;
