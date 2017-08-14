import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
        <Hero className={css.hero}>
          <h1>User Generated Content</h1>
          <p>Static content page example</p>
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
