import React from 'react';
import styled from 'styled-components';

import Container from '~components/Layout/Container';
import Col from '~components/Layout/Col';

import * as mixins from '~styles/mixins';
import Projects from '~components/Section/Projects';

const Row = styled.div`
  ${mixins.makeRow()}

  ${({ section }) => section && `margin-top: 80px; margin-bottom: 160px;`}
`;

const PortfolioPage = () => (
  <>
    <Container>
      <Row section>
        <Col>
          <Projects title="Android Projects" />
        </Col>
      </Row>
      <Row section>
        <Col>
          <Projects title="Web Projects" />
        </Col>
      </Row>
    </Container>
  </>
);

export default PortfolioPage;
