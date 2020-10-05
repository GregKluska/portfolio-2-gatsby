import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.div``;

const StyledLink = styled(Link)`
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  text-decoration: none;
`;

const Logo = () => {
  return (
    <Wrapper>
      <StyledLink to="/">GK</StyledLink>
    </Wrapper>
  );
};

export default Logo;
