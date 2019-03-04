import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import { UncontrolledCarousel } from 'reactstrap';

export default () => (
  <StaticQuery
  query={graphql
    `
      query {
        allContentfulHomepageSlide {
         	edges {
            node {
              title
              description {
                description
              }
              backgroundImage {
                resize(width: 800) {
                  src
                  width
                  height
                }
              }
              icon {
                resize(width: 150) {
                  src
                  width
                  height
                }
              }
              createdAt
            }
          }
        }
      }
    `
  }

  render={data => (
    <div className="slider">
      <UncontrolledCarousel items={
        data.allContentfulHomepageSlide.edges.map(({ node }, index) => (
          {
            src: node.icon.resize.src,
            altText: node.title,
            caption: node.description.description,
            header: node.title
          }
        ))
      } />
    </div>
  )}
 />)
