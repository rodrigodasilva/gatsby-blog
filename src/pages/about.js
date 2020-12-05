import React from 'react'
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (      
  <Layout>
    <SEO title="About" />
    <h1>About</h1>    

    <Link to="/" activeStyle={{color: 'red'}}>
      Home
    </Link>

    <Link to="/about" activeStyle={{color: 'red'}}>
      About
    </Link>
  </Layout>       
)


export default AboutPage
