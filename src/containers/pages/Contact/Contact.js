import React, { Component } from 'react'
import PropTypes from 'prop-types'

import css from './styles.css'

class Contact extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        Contact Page
      </main>
    )
  }
}

Contact.PropTypes = {
  loadPageData: PropTypes.func.isRequired,
}

export default Contact
