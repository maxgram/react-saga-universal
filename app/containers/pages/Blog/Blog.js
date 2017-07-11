import React, { Component } from 'react'
import PropTypes from 'prop-types'

import css from './styles.css'

class Blog extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        Blog Page
      </main>
    )
  }
}

Blog.PropTypes = {
  loadPageData: PropTypes.func.isRequired,
}

export default Blog
