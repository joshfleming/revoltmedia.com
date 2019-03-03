import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Portfolio from "../components/portfolio"
import Slider from "../components/slider"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>
          Page Title
        </h1>
        <Slider />
        <Portfolio />
      </div>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Layout>
  )
}
