import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'

import css from './Section.css'


const Section = ({children, image, imgLeft=false, className}) => {
  return (
    <section className={className ? className : css.section}>
      <Grid fluid>
        {
          !imgLeft
          ? <Row middle="xs" className={css.row}>
              <Col xs={12} smOffset={1} sm={4} className={css.mobFirst}>
                { children }
              </Col>
              <Col xs={12} smOffset={1} sm={5} className={css.col}>
                <div className={css.imageHolder}>
                  <img src={image} className={css.imageR} />
                </div>
              </Col>
            </Row>
          : <Row middle="xs" className={css.row}>
              <Col xs={12} smOffset={1} sm={5} className={css.col}>
                <div className={css.imageHolder}>
                  <img src={image} className={css.imageL} />
                </div>
              </Col>
              <Col xs={12} smOffset={1} sm={4} className={css.mobFirst}>
                { children }
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
