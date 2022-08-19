import React from 'react'

import PropTypes from 'prop-types'

import './component2.css'

const Component2 = (props) => {
  return (
    <div className="component2-container">
      <button className="component2-button button">{props.button1}</button>
    </div>
  )
}

Component2.defaultProps = {
  button1: 'Button',
}

Component2.propTypes = {
  button1: PropTypes.string,
}

export default Component2
