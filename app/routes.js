import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home, About, Blog, Contact, NotFound } from './containers/pages'

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />

      {/*<Route path="/blog/:id" component={BlogItem} />*/}
    </Switch>
  )
}

export default Routes
