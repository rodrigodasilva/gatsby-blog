import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => (
      <>
        <h1>About page</h1>
        <Link to="/" activeStyle={{color: 'red'}}>
          Home
        </Link>

        <Link to="/about" activeStyle={{color: 'red'}}>
          About
        </Link>
      </>    
);


export default AboutPage;
