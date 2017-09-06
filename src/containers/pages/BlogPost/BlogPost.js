import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { Hero, Ugc } from 'Layout'

import css from './styles.css'

class BlogPost extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.loadPost()
  }

  render() {
    const { ugc } = this.props

    return (
      <main>
        <Helmet title="Blog Post" />

        <Hero className={css.hero}>
          <h1>Blog Post</h1>
          <p>User generated content example</p>
        </Hero>

        <Ugc data={ugc} />
      </main>
    )
  }
}

BlogPost.PropTypes = {
  loadPost: PropTypes.func.isRequired,
  ugc: PropTypes.shape({
    _html: PropTypes.string.isRequired,
  }).isRequired,
}

export default BlogPost
