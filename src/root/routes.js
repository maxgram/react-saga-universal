import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home, About, Blog, BlogPost, Github, NotFound } from 'Pages'

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/blog/:id" component={BlogPost} />
      <Route path="/blog" component={Blog} />
      <Route path="/about" component={About} />
      <Route path="/github" component={Github} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
