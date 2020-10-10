/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import * as mixins from '~styles/mixins';

const Col = styled.div`
  ${mixins.makeColReady()}
  ${({ xs }) => mixins.makeCol(xs === undefined ? 12 : xs, 12)}
  ${up('sm')} {
    ${({ sm }) => typeof sm !== 'undefined' && mixins.makeCol(sm, 12)}
  }
  ${up('md')} {
    ${({ md }) => typeof md !== 'undefined' && mixins.makeCol(md, 12)}
  }
  ${up('lg')} {
    ${({ lg }) => typeof lg !== 'undefined' && mixins.makeCol(lg, 12)}
  }
  ${up('xl')} {
    ${({ xl }) => typeof xl !== 'undefined' && mixins.makeCol(xl, 12)}
  }
  ${up('xxl')} {
    ${({ xxl }) => typeof xxl !== 'undefined' && mixins.makeCol(xxl, 12)}
  }

  ${({ flexVCenter }) => {
    if (typeof flexVCenter !== 'undefined' && flexVCenter === true) {
      return `
        display:flex;
        flex-direction: column;
        justify-content: center;
      `;
    }
    return null;
  }}
`;

const Column = ({ className, xs, sm, md, lg, xl, xxl, flexVCenter, children, ...props }) => {
  return (
    <Col
      className={className}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      xxl={xxl}
      flexVCenter={flexVCenter}
      {...props}
    >
      {children}
    </Col>
  );
};

Column.defaultProps = {
  className: null,
  xs: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
  xxl: undefined,
  flexVCenter: false,
};

Column.propTypes = {
  className: PropTypes.string,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  xxl: PropTypes.number,
  flexVCenter: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Column;
