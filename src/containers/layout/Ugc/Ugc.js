import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'

import css from './Ugc.css'

const Ugc = ({data, className, ugcStyles}) => {
  return (
    <section className={className ? className : css.section}>
      <Grid fluid>
        {
          <Row center="xs" className={css.row}>
            <Col xs={12} sm={10} className={css.col}>
              <div
                className={ugcStyles ? ugcStyles : css.ugc}
                dangerouslySetInnerHTML={data}
              />
            </Col>
          </Row>
        }
      </Grid>
    </section>
  )
}

Ugc.propTypes = {
  data: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
  ugcStyles: PropTypes.string,
}

export default Ugc
