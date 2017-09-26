import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import ScrollTopOnMount from 'Components/ScrollTopOnMount'
import Spinner from 'Components/Spinner'
import { Hero, Ugc } from 'Layout'

import css from './styles.css'

class BlogPost extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const postId = this.props.match.params.id
    this.props.loadPost(postId)
  }

  render() {
    const { isFetching, post: {title, body, author} } = this.props
    const ugc = {__html: body || ''}

    return (
      <main>
        <ScrollTopOnMount />
        <Helmet title={title} />

        <Hero className={css.hero}>
        {
          !isFetching
          ? <div>
              <h1>{title}</h1>
              <p>by {author}</p>
            </div>
          : <Spinner />
        }
        </Hero>

        {
          !isFetching
          ? <Ugc data={ugc} />
          : <Spinner />
        }
      </main>
    )
  }
}


BlogPost.PropTypes = {
  loadPost: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  ugc: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }).isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
}

export default BlogPost



