import { connect } from 'react-redux'
import BlogPost from './BlogPost'

import { loadPost } from 'Redux/modules/posts/actions'


export default connect(
  state => ({
    isFetching: state.blog.post.isFetching,
    post: state.blog.post.data
  }),
  {
    loadPost
  }
)(BlogPost)
