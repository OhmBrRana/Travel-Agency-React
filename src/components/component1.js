import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className="component1-container">
      <button className="component1-button button">{props.button1}</button>
    </div>
  )
}

Component1.defaultProps = {
  button1: 'Button',
}

Component1.propTypes = {
  button1: PropTypes.string,
}

export default Component1
