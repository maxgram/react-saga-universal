import { connect } from 'react-redux'
import Blog from './Blog'

import { loadAllPosts } from 'Redux/modules/posts/actions'


export default connect(
  state => ({
    isFetching: state.blog.list.isFetching,
    list: state.blog.list.data
  }),
  {
    loadAllPosts
  }
)(Blog)
