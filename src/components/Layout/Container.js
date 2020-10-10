import styled from 'styled-components';

import * as mixins from '~styles/mixins';

const Container = styled.div`
  ${mixins.makeContainer()}
  ${mixins.makeContainerMaxWidths()}

  position:relative;
`;

export default Container;
