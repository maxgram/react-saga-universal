import React, { Component } from 'react'
import PropTypes from 'prop-types'
import yeast from 'yeast'
import Helmet from 'react-helmet'
import { Grid, Row } from 'react-flexbox-grid'

import { Hero, List } from 'Layout'
import Card from 'Components/Card'

import css from './styles.css'

class Blog extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { list } = this.props
    return (
      <main>
        <Helmet title="Blog" />
        <Hero className={css.hero}>
          <h1>Blog</h1>
          <p>List of blog posts</p>
        </Hero>

        <List>
          {
            list.map(({title, copy}) => (
              <Card
                key={yeast()}
                title={title}
                copy={copy}
                image="http://via.placeholder.com/350x250"
              />
            ))
          }
        </List>
      </main>
    )
  }
}

Blog.PropTypes = {
  list: PropTypes.array.isRequired,
  loadPageData: PropTypes.func.isRequired,
}

export default Blog
