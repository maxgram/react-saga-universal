import React from 'react'
import PropTypes from 'prop-types'

import css from './Footer.css'

const Footer = (props) => {
  return (
    <footer className={css.mainFooter}>
      <div>
        Fork me on <a href="https://github.com/max-gram/react-saga-universal">Github</a>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  // propName: PropTypes.string.isRequired,
}

export default Footer
