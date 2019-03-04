import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import '../scss/main.scss'
import Header from "./header"
import Footer from "./footer"

export default ({ children }) => (
  <StaticQuery
  query={graphql
    `
      query {
        contentfulGlobalSettings {
          footerLogo {
            file {
              url
              contentType
            }
          }
          phoneNumber
          mailingAddress {
            childMarkdownRemark {
              html
            }
          }
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
    <div>
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </div>
  )}
 />)
