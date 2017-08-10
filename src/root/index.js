import React from 'react'

import Routes from './routes'
import Header from 'Components/Header'
import Footer from 'Components/Footer'

require('./styles/app.css')

const AppRoot = (props) => {
  return (
    <div className="reactroot">
      <Header />
      <Routes />
      <Footer />
    </div>
  )
}

export default AppRoot
