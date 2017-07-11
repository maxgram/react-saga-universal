import React from 'react'
import Helmet from 'react-helmet'

import css from './styles.css'

export default function NotFound() {
  return (
    <main className={css.notfound}>
      <Helmet title="Page not found - 404" />
      <h2>Page not found - 404</h2>
    </main>
  )
}
