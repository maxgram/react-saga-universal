import React from 'react'
import Helmet from 'react-helmet'
import ToTopOnMount from 'react-to-top-on-mount'

import css from './NotFound.css'

export default function NotFound() {
  return (
    <main className={css.notfound}>
      <ToTopOnMount />
      <Helmet title="Page not found - 404" />
      <h2>Page not found - 404</h2>
    </main>
  )
}
