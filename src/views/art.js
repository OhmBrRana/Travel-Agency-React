import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './art.css'

const Art = (props) => {
  return (
    <div className="art-container">
      <Helmet>
        <title>Art - Travel Agency</title>
        <meta property="og:title" content="Art - Travel Agency" />
      </Helmet>
      <Navbar Logo="Ohm Rana"></Navbar>
      <h1>About Me</h1>
    </div>
  )
}

export default Art
