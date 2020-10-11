import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Avatar from '~components/Content/Avatar';
import * as mixins from '~styles/mixins';

const SlideWrapper = styled.div`
  ${mixins.makeColReady()}
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

const Person = styled.div`
  text-align: center;

  font-weight: 700;
  font-size: 14px;
  line-height: 1.4em;
  padding-top: 10px;

  .job-title {
    display: block;
    font-weight: 200;
  }
`;

const Content = styled.div`
  text-align: center;

  font-weight: 200;

  padding-top: 15px;
  padding-bottom: 15px;

  font-size: 15px;
  line-height: 1.4em;
`;

const Testimonial = ({ author, jobTitle, image, children }) => {
  return (
    <SlideWrapper>
      <Slide>
        <Avatar fileName={image} />
        <Person>
          {author}
          {jobTitle && <span className="job-title">{jobTitle}</span>}
        </Person>
        <Content>{children}</Content>
      </Slide>
    </SlideWrapper>
  );
};

Testimonial.defaultProps = {
  jobTitle: undefined,
  image: null,
};

Testimonial.propTypes = {
  author: PropTypes.string.isRequired,
  jobTitle: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Testimonial;
