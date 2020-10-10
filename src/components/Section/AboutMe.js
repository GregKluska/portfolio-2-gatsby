import React from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import Col from '~components/Layout/Col';

import SectionTitle from '~components/Content/SectionTitle';
import Avatar from '~components/Content/Avatar';

import * as mixins from '~styles/mixins';

const SectionWrapper = styled.div`
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

const Row = styled.div`
  ${mixins.makeRow()}

  &.personal-data {
    padding-top: 20px;
  }
`;

const Button = styled.a`
  background: ${({ theme }) => theme.colors.primary};
  color: white;

  padding: 0px 15px;
  margin-top: 20px;

  display: inline-block;
  text-decoration: none;
`;
const ButtonWrapper = styled.div`
  text-align: center;
  ${up('sm')} {
    text-align: initial;
  }
`;

const AboutMe = () => {
  const personalData = [
    {
      label: 'Age',
      value: '24',
    },
    {
      label: 'Residence',
      value: 'UK',
    },
    {
      label: 'Freelance',
      value: 'Available',
    },
    {
      label: 'Address',
      value: 'Manchester, UK',
    },
    {
      label: 'Phone',
      value: '07874 655565',
    },
    {
      label: 'Email',
      value: 'kluskagreg@gmail.com',
    },
  ];

  return (
    <>
      <SectionTitle>About me</SectionTitle>
      <SectionWrapper>
        <AvatarWrapper>
          <Avatar />
        </AvatarWrapper>
        <ContentWrapper>
          <Paragraph>
            Hello! I’m Greg Kluska. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            tenetur ratione quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            tenetur ratione quod
          </Paragraph>
          <Row className="personal-data">
            {personalData.map(({ label, value }) => (
              <Info key={label} md={6} lg={4}>
                <Label>{label}</Label>
                {value}
              </Info>
            ))}
          </Row>
          <Row>
            <Col>
              <ButtonWrapper>
                <Button href="#" title="Download my CV!">
                  Download CV
                </Button>
              </ButtonWrapper>
            </Col>
          </Row>
        </ContentWrapper>
      </SectionWrapper>
    </>
  );
};

export default AboutMe;
