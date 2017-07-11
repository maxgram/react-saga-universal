import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'

import css from './styles.css'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>

        <Grid fluid>
            <Row center="xs">
              <Col xs={12} className={css.row}>
                Home Page
              </Col>
            </Row>

            <Row center="xs">
              <Col xs={6} className={css.columnLeft}>
                Col 1
              </Col>
              <Col xs={6} className={css.columnRight}>
                Col 2
              </Col>
            </Row>

          </Grid>
      </main>
    )
  }
}

Home.PropTypes = {
  loadPageData: PropTypes.func.isRequired,
}

export default Home
