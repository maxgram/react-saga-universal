import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'

import css from './styles.css'


const Hero = ({children, image, imgLeft=false, className}) => {
  return (
    <section className={className ? className : css.hero}>
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
