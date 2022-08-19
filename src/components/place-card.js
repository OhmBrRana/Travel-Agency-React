import React from 'react'

import PropTypes from 'prop-types'

import './place-card.css'

const PlaceCard = (props) => {
  return (
    <div className={`place-card-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image}
        className="place-card-image"
      />
      <div className="place-card-container1">
        <span className="place-card-text">{props.city}</span>
        <span className="place-card-text1">{props.description}</span>
        <div className="place-card-container2">
          <button className="place-card-button">{props.button1}</button>
        </div>
      </div>
    </div>
  )
}

PlaceCard.defaultProps = {
  image:
    'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=300',
  city: 'City Name',
  image_alt: 'image',
  rootClassName: '',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  button1: 'Button',
  link_button: '',
}

PlaceCard.propTypes = {
  image: PropTypes.string,
  city: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  button1: PropTypes.string,
  link_button: PropTypes.string,
}

export default PlaceCard
