import React, { useReducer } from 'react';
import styled, { css } from 'styled-components';

import Container from '~components/Layout/Container';
import Col from '~components/Layout/Col';

import SectionTitle from '~components/Content/SectionTitle';
import { ButtonCss } from '~components/Content/Button';

import * as mixins from '~styles/mixins';

const Row = styled.div`
  ${mixins.makeRow()}
  ${({ section }) => section && `margin-top: 80px; margin-bottom: 160px;`}
`;

const FieldCss = css`
  width: 100%;
  background: #fff;
  border-radius: 0;
  border: 0;
  border-bottom: 1px solid black;

  padding-bottom: 1.5rem;

  margin-top: 1rem;
  margin-bottom: 2rem;

  outline: 0;
`;

const Input = styled.input`
  ${FieldCss}
`;
const Textarea = styled.textarea`
  ${FieldCss}
`;

const Submit = styled.input`
  ${ButtonCss}
  overflow: hidden;
  display: inline-block;
  font-family: Rubik;
  line-height: 28px;
  box-sizing: border-box;
  margin-top: 0;
  color: #fff;
  border: 0;
`;

const IndexPage = () => (
  <Container>
    <Row>
      <Col>
        <SectionTitle>Contact me</SectionTitle>
      </Col>
      <Col section>
        <Input type="text" placeholder="Your name" />
      </Col>
      <Col section>
        <Input type="text" placeholder="Your email" />
      </Col>
      <Col section>
        <Textarea type="text" placeholder="Message" cols="40" rows="8" />
      </Col>
      <Col>
        <Submit type="submit" text="Send" />
      </Col>
    </Row>
  </Container>
);

export default IndexPage;
