import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  overflow: hidden;
`;

const Avatar = ({ fileName }) => {
  const imageQuery = useStaticQuery(graphql`
    query HeaderQuery {
      allImageSharp {
        nodes {
          parent {
            ... on File {
              name
            }
          }
          fluid(maxHeight: 600, maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  let image = imageQuery.allImageSharp.nodes.filter((node) => {
    return node.parent.name === fileName;
  });

  if (image.length < 1) {
    image = imageQuery.allImageSharp.nodes.filter((node) => {
      return node.parent.name === 'unsplash_avatar';
    });
  }

  return (
    <ImageWrapper>
      <Img fluid={image[0].fluid} />
    </ImageWrapper>
  );
};

Avatar.defaultProps = {
  fileName: null,
};

Avatar.propTypes = {
  fileName: PropTypes.string,
};

export default Avatar;
