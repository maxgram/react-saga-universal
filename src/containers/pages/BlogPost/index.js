import { connect } from 'react-redux'
import BlogPost from './BlogPost'

import { loadPost } from 'Redux/modules/posts/actions'


export default connect(
  state => ({
    isFetching: state.blog.isFetching,
    // post: state.blog.post
  }),
  {
    loadPost
  }
)(BlogPost)
