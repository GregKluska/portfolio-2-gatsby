import React from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import Layout from '~components/Layout/Layout';
import * as mixins from '~styles/mixins';

import Col from '~components/Layout/Col';
import SectionTitle from '~components/Content/SectionTitle';
import Avatar from '~components/Content/Avatar';

const Container = styled.div`
  ${mixins.makeContainer()}
  ${mixins.makeContainerMaxWidths()}
`;

const Row = styled.div`
  ${mixins.makeRow()}

  &.personal-data {
    padding-top: 20px;
  }
`;

const AboutMeSection = styled.div`
  display: flex;
  flex-direction: column;
  ${up('sm')} {
    flex-direction: row;
  }
`;

const AvatarWrapper = styled.div`
  flex-shrink: 0;

  display: flex;

  padding-bottom: 30px;

  justify-content: center;
  ${up('sm')} {
    padding-bottom: initial;
    justify-content: flex-start;
  }
`;

const ContentWrapper = styled.div`
  flex-grow: 1;

  font-size: 13px;
  ${up('sm')} {
    padding-left: 30px;
  }
`;

const Paragraph = styled.p`
  margin-top: 0;
  margin-bottom: 0;

  text-align: center;

  ${up('sm')} {
    text-align: initial;
  }
`;

const Info = styled(Col)`
  text-align: center;
  ${up('sm')} {
    text-align: initial;
  }
`;

const Label = styled.span`
  font-weight: 700;
  &:after {
    content: ': ';
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <SectionTitle>About me</SectionTitle>
            <AboutMeSection>
              <AvatarWrapper>
                <Avatar />
              </AvatarWrapper>
              <ContentWrapper>
                <Paragraph>
                  Hello! I’m Greg Kluska. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem tenetur ratione quod. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Autem tenetur ratione quod
                </Paragraph>
                <Row className="personal-data">
                  <Info md={6} lg={4}>
                    <Label>Age</Label>
                    24
                  </Info>
                  <Info md={6} lg={8}>
                    <Label>Residence</Label>
                    UK
                  </Info>
                  <Info md={6} lg={4}>
                    <Label>Freelance</Label>
                    Available
                  </Info>
                  <Info md={6} lg={8}>
                    <Label>Address</Label>
                    Manchester, UK
                  </Info>
                  <Info md={6} lg={4}>
                    <Label>Phone</Label>
                    07874 655565
                  </Info>
                  <Info md={6} lg={8}>
                    <Label>Email</Label>
                    kluskagreg@gmail.com
                  </Info>
                </Row>
              </ContentWrapper>
            </AboutMeSection>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <SectionTitle>About me</SectionTitle>
            <AboutMeSection>
              <AvatarWrapper>
                <Avatar />
              </AvatarWrapper>
              <ContentWrapper>
                <Paragraph>
                  Hello! I’m Greg Kluska. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem tenetur ratione quod. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Autem tenetur ratione quod
                </Paragraph>
                <Row className="personal-data">
                  <Info md={6} lg={4}>
                    <Label>Age</Label>
                    24
                  </Info>
                  <Info md={6} lg={8}>
                    <Label>Residence</Label>
                    UK
                  </Info>
                  <Info md={6} lg={4}>
                    <Label>Freelance</Label>
                    Available
                  </Info>
                  <Info md={6} lg={8}>
                    <Label>Address</Label>
                    Manchester, UK
                  </Info>
                  <Info md={6} lg={4}>
                    <Label>Phone</Label>
                    07874 655565
                  </Info>
                  <Info md={6} lg={8}>
                    <Label>Email</Label>
                    kluskagreg@gmail.com
                  </Info>
                </Row>
              </ContentWrapper>
            </AboutMeSection>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <SectionTitle>About me</SectionTitle>
            <AboutMeSection>
              <AvatarWrapper>
                <Avatar />
              </AvatarWrapper>
              <ContentWrapper>
                <Paragraph>
                  Hello! I’m Greg Kluska. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem tenetur ratione quod. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Autem tenetur ratione quod
                </Paragraph>
                <Row className="personal-data">
                  <Info md={6} lg={4}>
                    <Label>Age</Label>
                    24
                  </Info>
                  <Info md={6} lg={8}>
                    <Label>Residence</Label>
                    UK
                  </Info>
                  <Info md={6} lg={4}>
                    <Label>Freelance</Label>
                    Available
                  </Info>
                  <Info md={6} lg={8}>
                    <Label>Address</Label>
                    Manchester, UK
                  </Info>
                  <Info md={6} lg={4}>
                    <Label>Phone</Label>
                    07874 655565
                  </Info>
                  <Info md={6} lg={8}>
                    <Label>Email</Label>
                    kluskagreg@gmail.com
                  </Info>
                </Row>
              </ContentWrapper>
            </AboutMeSection>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default IndexPage;
