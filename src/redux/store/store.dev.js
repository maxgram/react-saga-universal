import createHistory from 'history/createBrowserHistory'
import configureStore from 'Redux/store/configureStoreDev'

export const history = createHistory()
export const store = configureStore(history, {})
