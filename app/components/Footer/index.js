import React from 'react'
import PropTypes from 'prop-types'

import css from './styles.css'

const Footer = (props) => {
  return (
    <footer className={css.mainFooter}>
      <div>
        FOOTER
      </div>
    </footer>
  )
}

Footer.propTypes = {
  // propName: PropTypes.string.isRequired,
}

export default Footer
