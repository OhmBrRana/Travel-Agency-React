import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import AboutMe from './views/about-me'
import LandingPage from './views/landing-page'
import Art from './views/art'
import Work from './views/work'
import Education from './views/education'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={AboutMe} path="/about-me" />
        <Route exact component={LandingPage} path="/" />
        <Route exact component={Art} path="/art" />
        <Route exact component={Work} path="/work" />
        <Route exact component={Education} path="/education" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
