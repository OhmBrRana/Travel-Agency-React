import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './work.css'

const Work = (props) => {
  return (
    <div className="work-container">
      <Helmet>
        <title>Work - Travel Agency</title>
        <meta property="og:title" content="Work - Travel Agency" />
      </Helmet>
      <Navbar Logo="Ohm Rana"></Navbar>
      <h1>Work Experince</h1>
    </div>
  )
}

export default Work
