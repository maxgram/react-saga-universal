import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home, About, Blog, BlogPost, Github, NotFound } from 'Pages'

import Header from 'Components/Header'
import Footer from 'Components/Footer'

require('../styles/app.css')

const AppRoot = (props) => {
  return (
    <div className="reactroot">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog/:id" component={BlogPost} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
        <Route path="/github" component={Github} />
        <Route component={NotFound} />
        {/* <Route path="/contact" component={Contact} /> */}
      </Switch>
      <Footer />
    </div>
  )
}

export default AppRoot
