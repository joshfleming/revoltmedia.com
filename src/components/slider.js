import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"

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
    <div id="slider">
      {data.allContentfulHomepageSlide.edges.map(({ node }, index) => (
        <div>
          <h3>
            {node.title}
          </h3>
          <img src={node.backgroundImage.resize.src} height={node.backgroundImage.resize.height} width={node.backgroundImage.resize.width} />
          <img src={node.icon.resize.src} height={node.icon.resize.height} width={node.icon.resize.width} />
          <div>
            {node.description.description}
          </div>
        </div>
      ))}
    </div>
  )}
 />)
