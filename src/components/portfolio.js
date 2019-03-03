import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"

export default () => (
  <StaticQuery
  query={graphql
    `
      query {
        allContentfulPortfolioItem {
         	edges {
            node {
              title
              description {
                description
              }
              images {
                resize(width: 250) {
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
    <div id="portfolio">
      {data.allContentfulPortfolioItem.edges.map(({ node }, index) => (
        <div>
          <h3>
            {node.title}
          </h3>
          {node.images.map(({ resize }, index) => (
            <img src={resize.src} width={resize.width} height={resize.height} />
          ))}
          <div>
            {node.description.description}
          </div>
        </div>
      ))}
    </div>
  )}
 />)
