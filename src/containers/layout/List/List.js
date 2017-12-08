import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row } from 'react-flexbox-grid'

import css from './List.css'


const List = ({children, className}) => {
  return (
    <section className={className ? className : css.section}>
      <Grid fluid>
        <Row middle="xs" className={css.row}>
          {children}
        </Row>
      </Grid>
    </section>
  )
}

List.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default List

