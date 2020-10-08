import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  overflow: hidden;
`;

const Avatar = () => {
  const image = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "unsplash_avatar.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 600, maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <ImageWrapper>
      <Img fluid={image.file.childImageSharp.fluid} />
    </ImageWrapper>
  );
};

export default Avatar;
