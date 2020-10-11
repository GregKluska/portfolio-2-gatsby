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
    { id: 1, value: 'Website hosting' },
    { id: 2, value: 'Create logo design' },
    { id: 3, value: 'Modern and mobile-ready' },
    { id: 4, value: 'Graphics and animations' },
    { id: 5, value: 'iOS and android apps' },
    { id: 6, value: 'Design for print' },
    { id: 7, value: 'Advertising services include' },
    { id: 8, value: 'Search engine marketing' },
  ];

  return (
    <>
      <SectionTitle>Knowledge</SectionTitle>
      <SectionWrapper>
        {knowledgeData.map((item) => (
          <SkillWrapper key={item.id}>
            <FontAwesomeIcon icon={faCheck} />
            <Skill>{item.value}</Skill>
          </SkillWrapper>
        ))}
      </SectionWrapper>
    </>
  );
};

export default MySkills;
