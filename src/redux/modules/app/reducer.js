import { REQUEST, SUCCESS, FAILURE } from 'Redux/actions/constants'
import { PLUS_COUNTER, MINUS_COUNTER } from './actions'


export function appReducer(state={
  counter: 0,
}, action) {
  let reducerState

  switch(action.type){
    case PLUS_COUNTER:
      reducerState = Object.assign({}, state)
      reducerState.counter ++
      break
    case MINUS_COUNTER:
      reducerState = Object.assign({}, state)
      reducerState.counter --
      break

    default:
      return state
  }

  return reducerState
}

