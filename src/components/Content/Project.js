import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { up } from 'styled-breakpoints';
import { graphql, useStaticQuery } from 'gatsby';

import Col from '~components/Layout/Col';
import Button, { CustomButton } from '~components/Content/Button';

import PortfolioContext from '~contexts/PortfolioContext';

const Wrapper = styled(Col)`
  padding-top: 5px;
  padding-bottom: 5px;

  ${up('md')} {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const Card = styled.div`
  background: #fff;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;

  :hover {
    img {
      transform: scale(1.05);
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 258px;

  ${up('md')} {
    height: 158px;
  }
  ${up('lg')} {
    height: 138px;
  }
  cursor: pointer;
`;

const Image = styled(Img)`
  width: 100%;
  height: 100%;

  img {
    object-fit: cover !important;
    transition: 0.5s ease-in-out transform !important;
  }
`;

const ContentWrapper = styled.div`
  padding: 5px;
  min-height: 165px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  display: block;

  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;
const Excerpt = styled.div`
  font-size: 13px;

  flex-grow: 1;
`;

const Links = styled.div`
  div.row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-left: -2.5px;
    margin-right: -2.5px;
  }
  div.buttonWrapper {
    padding-left: 2.5px;
    padding-right: 2.5px;
  }
`;

const Project = ({ data }) => {
  if (typeof data === 'undefined' || data === null) {
    return null;
  }
  const { dispatch } = useContext(PortfolioContext);

  const featuredImages = useStaticQuery(graphql`
    query ProjectImage {
      allImageSharp {
        nodes {
          parent {
            ... on File {
              name
            }
          }
          fluid(maxWidth: 540) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  let image = featuredImages.allImageSharp.nodes.filter((node) => {
    return node.parent.name === data.image;
  });

  if (image.length < 1) {
    image = featuredImages.allImageSharp.nodes.filter((node) => {
      return node.parent.name === 'project_placeholder';
    });
  }

  return (
    <Wrapper md={6} lg={4}>
      <Card>
        <ImageWrapper
          onClick={() => {
            dispatch({ type: 'openDetails', project: data });
          }}
        >
          <Image fluid={image[0].fluid} />
        </ImageWrapper>
        <ContentWrapper>
          <Title>{data.name}</Title>
          <Excerpt>{data.shortDescription}</Excerpt>
          <Links>
            <div className="row">
              <div className="buttonWrapper">
                <CustomButton
                  onClick={() => {
                    dispatch({ type: 'openDetails', project: data });
                  }}
                >
                  READ MORE
                </CustomButton>
              </div>
              {data.links.map((link) => (
                <div key={link.url} className="buttonWrapper">
                  <Button alt={link.alt} target="_blank" title={link.title} href={link.url}>
                    {link.label}
                  </Button>
                </div>
              ))}
            </div>
          </Links>
        </ContentWrapper>
      </Card>
    </Wrapper>
  );
};

Project.defaultProps = {
  data: null,
};

Project.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string,
        label: PropTypes.string,
        alt: PropTypes.string,
        title: PropTypes.string,
      })
    ),
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        url: PropTypes.string,
      })
    ),
    image: PropTypes.string,
  }),
};

export default Project;
