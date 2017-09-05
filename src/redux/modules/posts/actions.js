import { REQUEST, SUCCESS, FAILURE } from 'Redux/actions/constants'
import { actionCreator, createRequestTypes } from 'Redux/actions'


//// POSTS ////
export const LOAD_ALL_POSTS = 'LOAD_ALL_POSTS'
export const loadAllPosts = () => actionCreator(LOAD_ALL_POSTS)

export const GET_POSTS = createRequestTypes('GET_POSTS')
export const getPostsAction = {
  request: () => actionCreator(GET_POSTS[REQUEST]),
  success: (response) => actionCreator(GET_POSTS[SUCCESS], {response}),
  failure: (error) => actionCreator(GET_POSTS[FAILURE], {error}),
}
