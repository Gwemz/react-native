export const ADD_LOGIN_INFO = 'ADD_LOGIN_INFO';
export const CLEAR_LOGIN_INFO = 'CLEAR_LOGIN_INFO';

// 添加登录信息
export function addLoginInfo(value){
    return {type: ADD_LOGIN_INFO,value}
}

// 移除登录信息
export function clearLoginInfo(){
    return {type: CLEAR_LOGIN_INFO}
}