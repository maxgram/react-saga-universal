import { take, takeEvery, takeLatest, put, call, fork, select, all } from 'redux-saga/effects'
import { watchLoadAllPosts, watchLoadPost } from 'Redux/modules/posts/sagas'


export function* fetchEntity(entity, apiFn, data) {
  yield put( entity.request(data) )

  const {response, error} = yield call(apiFn, data)

  if(response)  yield put(entity.success(data, response))
  else          yield put(entity.failure(data, error))
}


export default function* rootSaga() {
  yield all([
    fork(watchLoadAllPosts),
    fork(watchLoadPost),
  ])
}
