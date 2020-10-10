import React from 'react';
import styled from 'styled-components';

import SectionTitle from '~components/Content/SectionTitle';
import TimelineItem from '~components/Content/TimelineItem';

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 15px;
`;

const Education = () => {
  const educationData = [
    {
      label: '2016 - 2019',
      heading: 'Coventry University - United Kingdom',
      content: 'Computer Science, BSc (Hons)',
    },
    {
      label: '2012 - 2016',
      heading: 'Technical High School for Computer Science - Poland',
      content: 'Certificate of competence in the profession of an IT technician, ref. 351203',
    },
  ];

  return (
    <>
      <SectionTitle>Education</SectionTitle>
      <SectionWrapper>
        {educationData.map((item) => (
          <TimelineItem label={item.label} heading={item.heading} content={item.content} />
        ))}
      </SectionWrapper>
    </>
  );
};

export default Education;
