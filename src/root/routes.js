import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home, About, Blog, Github, NotFound } from 'Pages'

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/github" component={Github} />
      <Route component={NotFound} />

      {/*<Route path="/blog/:id" component={BlogItem} />*/}
    </Switch>
  )
}

export default Routes
