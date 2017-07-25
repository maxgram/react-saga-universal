import { REQUEST, SUCCESS, FAILURE } from './constants'

export const actionCreator = (type, payload={}) => {
  return {type, ...payload}
}

export const createRequestTypes = (base) => {
  const cases = [REQUEST, SUCCESS, FAILURE]
  return cases.reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}
