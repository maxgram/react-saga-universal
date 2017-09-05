import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { blogReducer } from 'Redux/modules/posts/reducer'


const rootReducer = combineReducers({
  routing: routerReducer,
  blog: blogReducer,
})

export default rootReducer
