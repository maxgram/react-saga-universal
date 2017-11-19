import { REQUEST, SUCCESS, FAILURE } from 'Redux/actions/constants'
import { actionCreator, createRequestTypes } from 'Redux/actions'


//// COUNTER ////
export const PLUS_COUNTER = 'PLUS_COUNTER'
export const counterAdd = () => actionCreator(PLUS_COUNTER)


export const MINUS_COUNTER = 'MINUS_COUNTER'
export const counterRemove = () => actionCreator(MINUS_COUNTER)
