import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SectionTitle from '~components/Content/SectionTitle';
import Project from '~components/Content/Project';

import * as mixins from '~styles/mixins';

const SectionWrapper = styled.div`
  ${mixins.makeRow()}
`;

const Projects = ({ title, projects }) => {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <SectionWrapper>
        {projects !== null &&
          projects.map((project) => <Project data={project} key={project.id} />)}
      </SectionWrapper>
    </>
  );
};

Projects.defaultProps = {
  projects: null,
};

Projects.propTypes = {
  title: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      shortDescription: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string,
          label: PropTypes.string,
          alt: PropTypes.string,
          title: PropTypes.string,
        })
      ),
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          url: PropTypes.string,
        })
      ),
      image: PropTypes.string,
    })
  ),
};

export default Projects;
