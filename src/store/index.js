import { createStore } from 'redux'
import todoApp from './reducers'
let store = createStore(todoApp);
// console.log(store);
export default store;