import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import '../scss/main.scss'
import Header from "./header"
import Footer from "./footer"

export default ({ children }) => (
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
      <Helmet defaultTitle={data.contentfulGlobalSettings.siteTitle} titleTemplate={`%s | ${data.contentfulGlobalSettings.siteTitle}`}>
        <html lang="en" />
        <link rel="canonical" href="https://www.revoltmedia.com/" />
        <meta name="docsearch:version" content="2.0" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />

        <meta property="og:url" content="https://www.revoltmedia.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content={data.contentfulGlobalSettings.siteTitle} />
        <meta property="og:description" content="Development: Wordpress, Static Websites, GatsbyJS, React &amp; more." />
        <meta property="og:image" content="https://www.revoltmedia.com/assets/images/facebook-opengraph/og-image.jpg" />
        <meta property="og:image:height" content="372" />
        <meta property="og:image:width" content="711" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="Development: Wordpress, Static Websites, GatsbyJS, React &amp; more." />

        <link rel="apple-touch-icon" sizes="57x57" href="https://www.revoltmedia.com/assets/images/favicons/apple-touch-icon-57x57.png?v=00zdL7O026" />
        <link rel="apple-touch-icon" sizes="60x60" href="https://www.revoltmedia.com/assets/images/favicons/apple-touch-icon-60x60.png?v=00zdL7O026" />
        <link rel="apple-touch-icon" sizes="72x72" href="https://www.revoltmedia.com/assets/images/favicons/apple-touch-icon-72x72.png?v=00zdL7O026" />
        <link rel="apple-touch-icon" sizes="76x76" href="https://www.revoltmedia.com/assets/images/favicons/apple-touch-icon-76x76.png?v=00zdL7O026" />
        <link rel="apple-touch-icon" sizes="114x114" href="https://www.revoltmedia.com/assets/images/favicons/apple-touch-icon-114x114.png?v=00zdL7O026" />
        <link rel="apple-touch-icon" sizes="120x120" href="https://www.revoltmedia.com/assets/images/favicons/apple-touch-icon-120x120.png?v=00zdL7O026" />
        <link rel="apple-touch-icon" sizes="144x144" href="https://www.revoltmedia.com/assets/images/favicons/apple-touch-icon-144x144.png?v=00zdL7O026" />
        <link rel="apple-touch-icon" sizes="152x152" href="https://www.revoltmedia.com/assets/images/favicons/apple-touch-icon-152x152.png?v=00zdL7O026" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://www.revoltmedia.com/assets/images/favicons/apple-touch-icon-180x180.png?v=00zdL7O026" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://www.revoltmedia.com/assets/images/favicons/favicon-32x32.png?v=00zdL7O026" />
        <link rel="icon" type="image/png" sizes="192x192" href="https://www.revoltmedia.com/assets/images/favicons/android-chrome-192x192.png?v=00zdL7O026" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://www.revoltmedia.com/assets/images/favicons/favicon-16x16.png?v=00zdL7O026" />
        <link rel="manifest" href="https://www.revoltmedia.com/assets/images/favicons/site.webmanifest?v=00zdL7O026" />
        <link rel="mask-icon" href="https://www.revoltmedia.com/assets/images/favicons/safari-pinned-tab.svg?v=00zdL7O026" color="#61391b" />
        <link rel="shortcut icon" href="https://www.revoltmedia.com/assets/images/favicons/favicon.ico?v=00zdL7O026" />
        <meta name="apple-mobile-web-app-title" content="Revolt Media" />
        <meta name="application-name" content="Revolt Media" />
        <meta name="msapplication-TileColor" content="#61391b" />
        <meta name="msapplication-TileImage" content="https://www.revoltmedia.com/assets/images/favicons/mstile-144x144.png?v=00zdL7O026" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </div>
  )}
 />)
