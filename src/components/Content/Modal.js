import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

import Button from '~components/Content/Button';
import PortfolioContext from '~contexts/PortfolioContext';

import * as mixins from '~styles/mixins';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 99;

  display: flex;
  opacity: 0;
  pointer-events: none;

  align-items: center;
  justify-content: center;

  padding-left: 5px;
  padding-right: 5px;

  transition: 0.4s opacity ease-in-out;

  &.open {
    pointer-events: auto;
    opacity: 1;
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: -1;
  background: #000;
  opacity: 0.2;
  transition: 0.4s ease-in-out opacity;
`;

const Container = styled.div`
  ${mixins.makeContainer()}
  ${mixins.makeContainerMaxWidths()}
`;

const Row = styled.div`
  ${mixins.makeRow()}
`;

const Col = styled.div`
  ${mixins.makeColReady()}
  ${mixins.makeCol()}

  &.links, 
  &.heading {
    display: flex;
    flex-wrap: wrap;
    padding-top: 10px;
    padding-bottom: 10px;
    ${up('md')} {
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }

  &.heading {
    .title {
      flex-grow: 1;
      flex-shrink: 0;
    }

    .tags {
      display: flex;
      flex-shrink: 0;
    }
  }
`;

const ModalContainer = styled.div`
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;

  position: relative;

  min-height: 300px;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
  width: 32px;
  height: 32px;
  opacity: 0.6;
  cursor: pointer;
  z-index: 99;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #fff;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

const FeaturedImage = styled.div`
  width: 100%;
  height: 300px;

  overflow: hidden;
  img {
    transition: 0.5s ease-in-out transform !important;
  }
  img:hover {
    transform: scale(1.05);
  }

  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const ButtonWrapper = styled.div`
  & + & {
    margin-left: 5px;
  }
`;

const Tag = styled.div`
  & + & {
    margin-left: 15px;
  }

  font-size: 10px;

  &,
  & a {
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
  }
`;

const Image = styled(Img)`
  width: 100%;
  height: 100%;

  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(80, 79, 83, 0) 47%);
    pointer-events: none;
  }
`;

const Modal = () => {
  const { state, dispatch } = useContext(PortfolioContext);

  const data = state.currentProject;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const onEscHandler = () => {
        dispatch({ type: 'closeDetails' });
        return null;
      };
      window.addEventListener('keydown', onEscHandler, false);
      return () => {
        window.removeEventListener('keydown', onEscHandler, false);
      };
    }
  }, []);

  const featuredImages = useStaticQuery(graphql`
    query ProjectImageModal {
      allImageSharp {
        nodes {
          parent {
            ... on File {
              name
            }
          }
          fluid(maxWidth: 807) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  let image = [];

  if (data !== null) {
    image = featuredImages.allImageSharp.nodes.filter((node) => {
      return node.parent.name === data.image;
    });
  }

  if (image.length < 1) {
    image = featuredImages.allImageSharp.nodes.filter((node) => {
      return node.parent.name === 'project_placeholder';
    });
  }

  return (
    <Wrapper className={state.modal && 'open'}>
      <Background onClick={() => dispatch({ type: 'closeDetails' })} />
      <Container>
        <Row>
          <Col>
            <ModalContainer>
              <CloseButton onClick={() => dispatch({ type: 'closeDetails' })} />
              <FeaturedImage>
                <Image fluid={image[0].fluid} />
              </FeaturedImage>
              <Container>
                <Row>
                  <Col className="heading">
                    <div className="title">{data?.name ?? 'Title'}</div>
                    <div className="tags">
                      {data?.tags?.map((tag) => {
                        if (tag.url !== '') {
                          return (
                            <Tag key={tag.label}>
                              <a href={tag.url} alt={tag.alt} title={tag.title}>
                                {tag.label}
                              </a>
                            </Tag>
                          );
                        } else {
                          return <Tag key={tag.label}>{tag.label}</Tag>;
                        }
                      })}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>{data?.description ?? 'Description'}</Col>
                </Row>
                <Row>
                  <Col className="links">
                    {data?.links.map((link) => {
                      return (
                        <ButtonWrapper key={link.url}>
                          <Button alt={link.alt} target="_blank" title={link.title} href={link.url}>
                            {link.label}
                          </Button>
                        </ButtonWrapper>
                      );
                    })}
                  </Col>
                </Row>
              </Container>
            </ModalContainer>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Modal;
