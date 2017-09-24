import { REQUEST, SUCCESS, FAILURE } from 'Redux/actions/constants'
import { GET_POST, GET_POSTS } from './actions'


export function blogReducer(state={
  list: {
    isFetching: false,
    data: null
  },
  post: {
    isFetching: false,
    data: {
      id: null,
      title: null,
      body: null,
      author: null,
    }
  }
}, action) {
  let reducerState = Object.assign({}, state)
  let responseData

  switch(action.type){
    case GET_POSTS[REQUEST]:
      reducerState.list.isFetching = true
      break
    case GET_POSTS[SUCCESS]:
      responseData = action.response
      reducerState.list.data = responseData.data
      reducerState.list.isFetching = false
      break
    case GET_POSTS[FAILURE]:
      reducerState.list.isFetching = false
      break

    /////////////////////////////////////////////
    case GET_POST[REQUEST]:
      reducerState.post.isFetching = true
      break
    case GET_POST[SUCCESS]:
      responseData = action.response
      reducerState.post.data = responseData.data
      reducerState.post.isFetching = false
      break
    case GET_POST[FAILURE]:
      reducerState.post.isFetching = false
      break
  }

  return reducerState
}

