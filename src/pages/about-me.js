import React from 'react';
import styled from 'styled-components';

import Layout from '~components/Layout/Layout';
import * as mixins from '~styles/mixins';

const Container = styled.div`
  ${mixins.makeContainer()}
  ${mixins.makeContainerMaxWidths()}
`;

const Row = styled.div`
  ${mixins.makeRow()}
`;

const FullCol = styled.div`
  ${mixins.makeColReady()}
  ${mixins.makeCol(1, 1)}
`;

const IndexPage = () => (
  <Layout>
    <Container>
      <Row>
        <FullCol>ads</FullCol>
      </Row>
    </Container>
  </Layout>
);

export default IndexPage;
