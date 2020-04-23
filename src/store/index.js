import { createStore } from 'redux'
// import todoApp from './reducers'
// let store = createStore(todoApp);
// export default store;
import index from '../reducer'

/**
 * 创建store
 */
export default createStore(index)