import React, { Component } from 'react'
import PropTypes from 'prop-types'
import yeast from 'yeast'
import Helmet from 'react-helmet'
import { Grid, Row } from 'react-flexbox-grid'

import { Hero, List } from 'Layout'
import Spinner from 'Components/Spinner'
import Card from 'Components/Card'

import css from './styles.css'

class Blog extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.loadAllPosts()
  }

  render() {
    const { isFetching, list } = this.props

    return (
      <main>
        <Helmet title="Blog" />

        <Hero className={css.hero}>
          <h1>Blog</h1>
          <p>List of blog posts</p>
        </Hero>

        <List>
          {
            isFetching
            ? <Spinner />
            : list && list.length
              ? list.map( ({id, title, body}) => (
                  <Card
                    key={yeast()}
                    id={id}
                    title={title}
                    copy={body}
                    image="http://via.placeholder.com/350x250"
                  />
                ) )
              : <div>No results</div>
          }
        </List>
      </main>
    )
  }
}

Blog.PropTypes = {
  list: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  loadAllPosts: PropTypes.func.isRequired,
}

export default Blog
