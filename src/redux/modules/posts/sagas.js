import { take, takeLatest, put, call, fork, select, all } from 'redux-saga/effects'
import { fetchEntity } from 'Redux/rootSaga'
import { api } from 'Redux/services'

import {
  LOAD_ALL_POSTS, getPostsAction,
  LOAD_POST, getPostAction
} from './actions'
import { selectAllBlogs } from './selectors'


// ALL POSTS
const apiAllPosts = () => api.callApi(`posts`)
const fetchAllPosts = fetchEntity.bind(null, getPostsAction, apiAllPosts)

export function* loadAllPosts() {
  const allBlogs = yield select(selectAllBlogs)
  if(!allBlogs) yield call(fetchAllPosts)
}
export function* watchLoadAllPosts() { yield takeLatest(LOAD_ALL_POSTS, loadAllPosts) }


// ONE POST
const apiPost = (id) => api.callApi(`posts/`+id)
const fetchPost = fetchEntity.bind(null, getPostAction, apiPost)

export function* watchLoadPost() {
  while (true) {
    const {id} = yield take(LOAD_POST)
    yield call(loadAllPosts)
    yield call(fetchPost, id)
  }
}
