import {combineReducers} from 'redux';
import logininfo from './logininfo'
import theme from './theme'
const index = combineReducers({
    logininfo: logininfo,
    theme: theme
})
export default index;