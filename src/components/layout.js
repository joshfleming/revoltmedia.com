import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import '../scss/main.scss'
import Header from "./header"

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

  // const backgroundImage = {data.contentfulGlobalSettings.backgroundImage.fluid.src}
  // const backgroundImageOverlay = {data.contentfulGlobalSettings.backgroundImageOverlay.file.url}
  // const containerStyle = {
  //   backgroundImage: 'url(' + { backgroundImage } + '), url(' + { backgroundImageOverlay } + ')',
  //   backgroundRepeat: 'no-repeat,repeat',
  //   backgroundPosition: 'right bottom,center 110px',
  //   backgroundSize: '120%,1000px'
  // }


  render={data => (
    <div>
      <Header />
      <main>
        {children}
      </main>
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
    </div>
  )}
 />)
