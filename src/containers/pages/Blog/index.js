import { connect } from 'react-redux'
import Blog from './Blog'

import { loadAllPosts } from 'Redux/modules/posts/actions'


export default connect(
  state => ({
    isFetching: state.blog.isFetching,
    list: state.blog.list
  }),
  {
    loadAllPosts
  }
)(Blog)
