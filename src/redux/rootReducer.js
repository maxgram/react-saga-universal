import { combineReducers } from 'redux'
// import { routerReducer } from 'react-router-redux'

import { appReducer } from 'Redux/modules/app/reducer'
import { blogReducer } from 'Redux/modules/posts/reducer'


const rootReducer = combineReducers({
  // routing: routerReducer,
  app: appReducer,
  blog: blogReducer,
})

export default rootReducer
