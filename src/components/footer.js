import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"

export default () => (
  <StaticQuery
  query={graphql
    `
      query {
        contentfulGlobalSettings {
          siteTitle
          footerLogo {
            file {
              url
              contentType
            }
          }
          phoneNumber
          disclaimer {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    `
  }

  render={data => (
    <footer>
      <Link to={`/`}>
        <h3>
          {data.contentfulGlobalSettings.siteTitle}
          <img src={data.contentfulGlobalSettings.footerLogo.file.url} />
        </h3>
      </Link>
      <div className="disclaimer">
        {data.contentfulGlobalSettings.disclaimer.childMarkdownRemark.html}
      </div>
    </footer>
  )}
 />)
