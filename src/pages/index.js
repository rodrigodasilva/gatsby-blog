import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>    

    <Link to="/" activeStyle={{color: 'red'}}>
      Home
    </Link>

    <Link to="/about" activeStyle={{color: 'red'}}>
      About
    </Link>
  </Layout>
)

export default IndexPage
