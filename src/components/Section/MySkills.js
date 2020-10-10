import React from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import SectionTitle from '~components/Content/SectionTitle';

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SkillWrapper = styled.div`
  font-size: 0.9rem;
  width: 100%;

  line-height: 2.5em;

  ${up('md')} {
    width: 50%;
  }
`;

const Skill = styled.span`
  margin-left: 15px;
`;

const MySkills = () => {
  const knowledgeData = [
    'Website hosting',
    'Create logo design',
    'Modern and mobile-ready',
    'Graphics and animations',
    'iOS and android apps',
    'Design for print',
    'Advertising services include',
    'Search engine marketing',
  ];

  return (
    <>
      <SectionTitle>Knowledge</SectionTitle>
      <SectionWrapper>
        {knowledgeData.map((value) => (
          <SkillWrapper>
            <FontAwesomeIcon icon={faCheck} />
            <Skill>{value}</Skill>
          </SkillWrapper>
        ))}
      </SectionWrapper>
    </>
  );
};

export default MySkills;
