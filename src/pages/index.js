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
        <Slider />
        <Portfolio />
      </div>
    </Layout>
  )
}
