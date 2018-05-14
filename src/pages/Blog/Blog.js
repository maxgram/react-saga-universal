import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ToTopOnMount from 'react-to-top-on-mount'
import yeast from 'yeast'

import { Hero, List } from 'Layout'
import Spinner from 'Components/Spinner'
import Card from 'Components/Card'

import css from './Blog.css'

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
        <ToTopOnMount />
        <Helmet title="Blog" />

        <Hero className={css.hero}>
          <h1>Blog</h1>
          <p>List of blog posts</p>
        </Hero>

        <List>
          {
            !isFetching
            ? list && list.length
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
            : <Spinner />
          }
        </List>
      </main>
    )
  }
}

Blog.propTypes = {
  list: PropTypes.array,
  isFetching: PropTypes.bool.isRequired,
  loadAllPosts: PropTypes.func.isRequired,
}

export default Blog
