import 'isomorphic-fetch'

const API_ROOT = 'http://localhost:3001/'

export function callApi(endpoint, schema) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

  return fetch(fullUrl)
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }
      return Object.assign({}, {data: json})
    })
    .then(
      response => ({response}),
      error => ({error: error})
    )
}
