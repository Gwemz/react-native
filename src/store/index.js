import { applyMiddleware, createStore } from 'redux'
// import todoApp from './reducers'
// let store = createStore(todoApp);
// export default store;
import thunk from 'redux-thunk'
// 日志中间件
import createLogger from 'redux-logger'
import index from '../reducer'

/**
 * 创建store
 */
export default createStore(
    index,
    applyMiddleware(createLogger)
)