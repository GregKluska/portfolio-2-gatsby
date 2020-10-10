import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.div`
  width: 100%;
  padding-left: 30px;

  position: relative;

  &:not(:last-child):before {
    content: '';
    width: 1px;
    height: calc(100%);

    position: absolute;

    left: 0px;
    top: 0;

    background: ${({ theme }) => theme.colors.secondary};
  }
`;

const ItemDate = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  transform: translateY(-50%);

  display: inline-block;
  position: relative;

  font-size: 12px;
  line-height: 1.5em;
  padding: 5px 12px;

  &:before {
    content: '';
    width: 30px;
    height: 1px;
    position: absolute;
    right: calc(100% + 1px);
    top: 50%;
    transform: translateY(-1px);

    background: ${({ theme }) => theme.colors.secondary};
  }
`;
const ItemHeading = styled.div`
  font-size: 14px;
  padding-bottom: 5px;
  font-weight: 700;
`;
const ItemDescription = styled.div`
  font-size: 13px;
  line-height: 1.5em;
  margin-bottom: 35px;
`;

const TimelineItem = ({ label, heading, content }) => {
  return (
    <Item>
      <ItemDate>{label}</ItemDate>
      <ItemHeading>{heading}</ItemHeading>
      <ItemDescription>{content}</ItemDescription>
    </Item>
  );
};

TimelineItem.propTypes = {
  label: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default TimelineItem;
