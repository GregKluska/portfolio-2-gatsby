import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { up } from 'styled-breakpoints';
import { graphql, useStaticQuery } from 'gatsby';

import Col from '~components/Layout/Col';
import Button from '~components/Content/Button';

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
`;
const Title = styled.div``;
const Excerpt = styled.div`
  font-size: 13px;
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

const Project = ({ projectName }) => {
  const placeholderImage = useStaticQuery(graphql`
    query ProjectPlaceholder {
      file(relativePath: { eq: "project_placeholder.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 540) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Wrapper md={6} lg={4}>
      <Card>
        <ImageWrapper>
          <Image fluid={placeholderImage.file.childImageSharp.fluid} />
        </ImageWrapper>
        <ContentWrapper>
          <Title>{projectName}</Title>
          <Excerpt>This is a short description of a project</Excerpt>
          <Links>
            <div className="row">
              <div className="buttonWrapper">
                <Button
                  alt="Github repository"
                  title="Link to Github Repository"
                  href="https://github.com"
                >
                  GITHUB
                </Button>
              </div>
            </div>
          </Links>
        </ContentWrapper>
      </Card>
    </Wrapper>
  );
};

Project.defaultProps = {
  projectName: 'Project name',
};

Project.propTypes = {
  projectName: PropTypes.string,
};

export default Project;
