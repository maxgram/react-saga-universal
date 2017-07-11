import React, { Component } from 'react'
import PropTypes from 'prop-types'

import css from './styles.css'

class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        About Page
      </main>
    )
  }
}

About.PropTypes = {
  loadPageData: PropTypes.func.isRequired,
}

export default About
