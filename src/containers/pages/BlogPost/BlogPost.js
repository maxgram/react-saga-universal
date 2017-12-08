import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ToTopOnMount from 'react-to-top-on-mount'
import { findIndex, propEq } from 'ramda'

import { Hero, Ugc } from 'Layout'
import Spinner from 'Components/Spinner'
import Pagination from 'Components/Pagination'

import css from './BlogPost.css'

class BlogPost extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const postId = this.props.match.params.id
    this.props.loadPost(postId)
  }

  componentWillReceiveProps(nextProps, nextState) {
    const oldPostId = this.props.match.params.id
    const newPostId = nextProps.match.params.id
    if(oldPostId !== newPostId) this.props.loadPost(newPostId)
  }

  render() {
    const { isFetching, list, post: {id, title, body, author} } = this.props
    const ugc = {__html: body || ''}

    const index = list ? findIndex(propEq('id', Number(id)))(list) : null
    const prevUrl = index > 0 ? '/blog/'+(index-1) : null
    const nextUrl = list && index < list.length-1 ? '/blog/'+(index+1) : null
    const pages = { prevUrl: prevUrl, nextUrl: nextUrl }

    return (
      <main>
        <ToTopOnMount />
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
          ? <Fragment>
              <Ugc data={ugc} />
              <Pagination {...pages} />
            </Fragment>
          : <Spinner />
        }
      </main>
    )
  }
}


BlogPost.propTypes = {
  loadPost: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
}

export default BlogPost



