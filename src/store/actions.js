/**
 * actions 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/**
 * 其它的常量
 */

export const VisbilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/**
 * action 创建函数
 */

// 添加任务
export function addTodo(text){
    return {type: ADD_TODO,text}
}

// 处理对应任务状态
export function toggleTodo(index){
    return {type: TOGGLE_TODO,index}
}

// 设置展示操作
export function setVisibilityFilter(filter){
    return {type: SET_VISIBILITY_FILTER,filter}
}