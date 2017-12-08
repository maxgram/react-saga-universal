import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'

import css from './Hero.css'


const Hero = ({children, image, imgLeft=false, className}) => {
  const styleClass = className ? (className + ' ' + css.hero) : css.hero

  return (
    <section className={styleClass}>
      <div className={css.inner}>
        {children}
      </div>
    </section>
  )
}

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Hero
