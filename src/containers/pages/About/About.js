import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import ScrollTopOnMount from 'Components/ScrollTopOnMount'
import { Hero, Ugc } from 'Layout'

import css from './styles.css'

class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {ugc} = this.props

    return (
      <main>
        <ScrollTopOnMount />
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

About.PropTypes = {
  loadPageData: PropTypes.func.isRequired,
  ugc: PropTypes.shape({
    _html: PropTypes.string.isRequired,
  }).isRequired,
}

export default About
