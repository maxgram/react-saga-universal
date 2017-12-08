import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ToTopOnMount from 'react-to-top-on-mount'

import { Hero, Ugc } from 'Layout'

import css from './About.css'

class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {ugc} = this.props

    return (
      <main>
        <ToTopOnMount />
        <Helmet title="About" />

        <Hero className={css.hero}>
          <h1>About page</h1>
          <p>User generated content example</p>
        </Hero>

        <Ugc data={ugc} />
      </main>
    )
  }
}

About.propTypes = {
  loadPageData: PropTypes.func.isRequired,
  ugc: PropTypes.shape({
    _html: PropTypes.string,
  }).isRequired,
}

export default About
