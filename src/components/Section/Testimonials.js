/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import SectionTitle from '~components/Content/SectionTitle';
import StyledSlick from '~util/styled-slick';

import * as mixins from '~styles/mixins';
import Testimonial from '../Content/Testimonial';

const SectionWrapper = styled.div`
  ${mixins.makeRow()}
`;

const SliderNav = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  height: 100%;
`;

const Icon = styled(FontAwesomeIcon)`
  &:first-child {
    margin-right: 10px;
  }

  cursor: pointer;
`;
const HeadingWrapper = styled.div`
  position: relative;
`;

const Testimonials = () => {
  const sliderRef = useRef(null);

  const sliderConfig = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    if (sliderRef !== null) {
      try {
        sliderRef.current.slickNext();
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log("Can't find the slider reference :(");
      }
    }
  };

  const prevSlide = () => {
    if (sliderRef !== null) {
      try {
        sliderRef.current.slickPrev();
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log("Can't find the slider reference :(");
      }
    }
  };

  const testimonialData = [
    {
      id: 1,
      name: 'Albert Dera',
      jobTitle: 'Art Director',
      image: 'albert',
      testimonial:
        'I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you.',
    },
    {
      id: 2,
      name: 'Austin Wade',
      jobTitle: 'Web Developer',
      image: 'austin',
      testimonial:
        'It’s really great how easy your websites are to update and manage. I never have any problem at all. I’m glad I decided to work with you.',
    },
    {
      id: 3,
      name: 'Michael Dam',
      jobTitle: 'Designer',
      image: 'michael',
      testimonial:
        'I just wanted to share a quick note and let you know that you guys do a really good job. I’m glad I decided to work with you.',
    },
    {
      id: 4,
      name: 'Taylor Hernandez',
      jobTitle: 'Web Developer',
      image: 'taylor',
      testimonial:
        'It’s really great how easy your websites are to update and manage. I never have any problem at all. I’m glad I decided to work with you.',
    },
  ];

  return (
    <>
      <HeadingWrapper>
        <SectionTitle>Testimonials</SectionTitle>
        <SliderNav>
          <Icon icon={faChevronLeft} onClick={prevSlide} />
          <Icon icon={faChevronRight} onClick={nextSlide} />
        </SliderNav>
      </HeadingWrapper>
      <SectionWrapper>
        <StyledSlick ref={sliderRef} {...sliderConfig}>
          {testimonialData.map((item) => (
            <Testimonial
              key={item.id}
              image={item.image}
              author={item.name}
              jobTitle={item.jobTitle}
            >
              {item.testimonial}
            </Testimonial>
          ))}
        </StyledSlick>
      </SectionWrapper>
    </>
  );
};

export default Testimonials;
