import React from 'react';
import styled from 'styled-components';

import SectionTitle from '~components/Content/SectionTitle';
import TimelineItem from '~components/Content/TimelineItem';

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 15px;
`;

const Experience = () => {
  const experienceData = [
    {
      id: 1,
      label: '2013 - Present',
      heading: 'Art Director - Facebook Inc.',
      content: 'Collaborate with creative and development teams on the execution of ideas.',
    },
    {
      id: 2,
      label: '2010 - 2013',
      heading: 'Front-End Developer - Google Inc.',
      content: 'Monitored technical aspects of the front-end delivery for projects.',
    },
    {
      id: 3,
      label: '2005 - 2010',
      heading: 'Senior Developer - ABC Inc.',
      content: 'Optimize your website and apps performance using latest technology.',
    },
  ];

  return (
    <>
      <SectionTitle>Experience</SectionTitle>
      <SectionWrapper>
        {experienceData.map((item) => (
          <TimelineItem
            key={item.id}
            label={item.label}
            heading={item.heading}
            content={item.content}
          />
        ))}
      </SectionWrapper>
    </>
  );
};

export default Experience;
