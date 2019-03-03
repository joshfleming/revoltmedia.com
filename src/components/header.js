import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"

export default () => (
  <StaticQuery
  query={graphql
    `
      query {
        contentfulGlobalSettings {
          siteTitle
          headerLogo {
            file {
              url
              contentType
            }
          }
          phoneNumber
        }
      }
    `
  }

  render={data => (
    <header>
      <div>
        <Link to={`/`}>
          <h1>
            <img src={data.contentfulGlobalSettings.headerLogo.file.url} alt={data.contentfulGlobalSettings.siteTitle} />
          </h1>
        </Link>
        <div className="phone">{data.contentfulGlobalSettings.phoneNumber}</div>
      </div>
    </header>
  )}
 />)
