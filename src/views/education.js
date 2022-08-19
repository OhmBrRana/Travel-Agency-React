import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './education.css'

const Education = (props) => {
  return (
    <div className="education-container">
      <Helmet>
        <title>Education - Travel Agency</title>
        <meta property="og:title" content="Education - Travel Agency" />
      </Helmet>
      <Navbar Logo="Ohm Rana"></Navbar>
      <h1>About Me</h1>
    </div>
  )
}

export default Education
