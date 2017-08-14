import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'

import css from './styles.css'


const Section = ({children, image, imgLeft=false, className}) => {
  return (
    <section className={className ? className : css.section}>
      <Grid fluid>
        {
          <Row middle="xs" className={css.row}>
            <Col xs={12} sm={6} className={css.col}>
              { imgLeft ? <img src={image} className={css.imageL} /> : children }
            </Col>
            <Col xs={12} sm={6} className={css.col}>
              { imgLeft ? children : <img src={image} className={css.imageR} /> }
            </Col>
          </Row>
        }
      </Grid>
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  imgLeft: PropTypes.bool,
  className: PropTypes.string,
}

export default Section
