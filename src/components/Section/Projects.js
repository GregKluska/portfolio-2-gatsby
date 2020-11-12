import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SectionTitle from '~components/Content/SectionTitle';
import Project from '~components/Content/Project';

import * as mixins from '~styles/mixins';

const SectionWrapper = styled.div`
  ${mixins.makeRow()}
`;

const Projects = ({ title }) => {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <SectionWrapper>
        <Project />
        <Project />
        <Project />
      </SectionWrapper>
    </>
  );
};

Projects.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Projects;
