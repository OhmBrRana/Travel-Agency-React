import React from 'react'

import PropTypes from 'prop-types'

import OutlineButton from './outline-button'
import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <span className="component-text">{props.city}</span>
      <span className="component-text1">{props.description}</span>
      <OutlineButton></OutlineButton>
    </div>
  )
}

AppComponent.defaultProps = {
  city: 'City Name',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
}

AppComponent.propTypes = {
  city: PropTypes.string,
  description: PropTypes.string,
}

export default AppComponent
