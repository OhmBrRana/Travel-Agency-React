import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './about-me.css'

const AboutMe = (props) => {
  return (
    <div className="about-me-container">
      <Helmet>
        <title>About-Me - Travel Agency</title>
        <meta property="og:title" content="About-Me - Travel Agency" />
      </Helmet>
      <Navbar Logo="Ohm Rana"></Navbar>
      <h1>About Me</h1>
    </div>
  )
}

export default AboutMe
