import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Spinner from 'Components/Spinner'
import { Hero, Section } from 'Layout'

import css from './styles.css'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const imgFPO = 'http://via.placeholder.com/350x150'

    return (
      <main>
        <Hero>
          <h1>React Saga Universal</h1>
          <p>Example of full production setup with server side rendering</p>
        </Hero>

        <Section
          className={css.sectionOne}
          image={imgFPO}
        >
          <h2>Title</h2>
          <p>lorem ipsum</p>
        </Section>

        <Section
          className={css.sectionTwo}
          image={imgFPO}
          imgLeft
        >
          <h2>Title</h2>
          <p>lorem ipsum</p>
        </Section>

        <Grid fluid>
            <Row center="xs">
              <Col xs={12} className={css.row}>
                Home Page
                <Spinner />
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
