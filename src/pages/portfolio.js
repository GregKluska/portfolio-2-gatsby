import React, { useReducer } from 'react';
import styled from 'styled-components';

import Container from '~components/Layout/Container';
import Col from '~components/Layout/Col';

import * as mixins from '~styles/mixins';
import Projects from '~components/Section/Projects';
import Modal from '~components/Content/Modal';

import PortfolioContext from '~contexts/PortfolioContext';

import { androidProjects, webProjects } from '~data/projects';

const Row = styled.div`
  ${mixins.makeRow()}

  ${({ section }) => section && `margin-top: 80px; margin-bottom: 160px;`}
`;

const initialState = {
  modal: false,
  currentProject: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'openDetails': {
      return {
        ...state,
        modal: true,
        currentProject: action.project,
      };
    }
    case 'closeDetails': {
      return {
        ...state,
        modal: false,
      };
    }
    default: {
      return state;
    }
  }
};

const PortfolioPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <PortfolioContext.Provider value={{ state, dispatch }}>
        <Container>
          <Row section>
            <Col>
              <Projects title="Android Projects" projects={androidProjects} />
            </Col>
          </Row>
          <Row section>
            <Col>
              <Projects title="Web Projects" projects={webProjects} />
            </Col>
          </Row>
        </Container>
        <Modal />
      </PortfolioContext.Provider>
    </>
  );
};

export default PortfolioPage;
