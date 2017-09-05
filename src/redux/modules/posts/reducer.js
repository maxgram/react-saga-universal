import { REQUEST, SUCCESS, FAILURE } from 'Redux/actions/constants'
import { GET_POSTS } from './actions'


export function blogReducer(state={
  isFetching: false,
  list: null,
}, action) {
  let reducerState = Object.assign({}, state)

  switch(action.type){
    case GET_POSTS[REQUEST]:
      reducerState.isFetching = true
      break
    case GET_POSTS[SUCCESS]:
      const responseData = action.response
      reducerState.list = responseData.data
      reducerState.isFetching = false
      break
    case GET_POSTS[FAILURE]:
      reducerState.isFetching = false
      break
  }

  return reducerState
}

