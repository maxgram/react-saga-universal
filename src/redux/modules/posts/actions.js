import { REQUEST, SUCCESS, FAILURE } from 'Redux/actions/constants'
import { actionCreator, createRequestTypes } from 'Redux/actions'


//// POSTS ////
export const LOAD_ALL_POSTS = 'LOAD_ALL_POSTS'
export const loadAllPosts = () => actionCreator(LOAD_ALL_POSTS)

export const GET_POSTS = createRequestTypes('GET_POSTS')
export const getPostsAction = {
  request: () => actionCreator(GET_POSTS[REQUEST]),
  success: (data, response) => actionCreator(GET_POSTS[SUCCESS], {response}),
  failure: (data, error) => actionCreator(GET_POSTS[FAILURE], {error}),
}


//// ONE POST ////
export const LOAD_POST = 'LOAD_POST'
export const loadPost = (id) => actionCreator(LOAD_POST, {id})

export const GET_POST = createRequestTypes('GET_POST')
export const getPostAction = {
  request: () => actionCreator(GET_POST[REQUEST]),
  success: (data, response) => actionCreator(GET_POST[SUCCESS], {response}),
  failure: (data, error) => actionCreator(GET_POST[FAILURE], {error}),
}
