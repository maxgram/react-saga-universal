import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'

import css from './Pagination.css'


const Pagination = ({prevUrl, nextUrl, className}) => {
  return (
    <section className={className ? className : css.section}>
      <Grid fluid>
        <Row center="xs" className={css.row}>
          <Col xs={6} className={css.col}>
            {
              prevUrl ? <Link to={prevUrl}>Prev</Link> : null
            }
          </Col>
          <Col xs={6} className={css.col}>
            {
              nextUrl ? <Link to={nextUrl}>Next</Link> : null
            }
          </Col>
        </Row>
      </Grid>
    </section>
  )
}

Pagination.propTypes = {
  prevUrl: PropTypes.string,
  nextUrl: PropTypes.string,
  className: PropTypes.string,
}

export default Pagination
