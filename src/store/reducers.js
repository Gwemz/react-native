import {combineReducers} from 'redux'
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisbilityFilters
} from './actions'

const { SHOW_ALL } = VisbilityFilters

/**
 * 
 * 理想的数据结构：
 * 
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}

 */

const initState = {
    visibilityFilter: VisbilityFilters.SHOW_ALL,
    todos: []
}

// function todoApp(state = initState,action){
//     // 这里暂不处理任何 action
//     // 仅返回传入的 state
//     switch(action.type){
//         case SET_VISIBILITY_FILTER:
//             return Object.assign({},state,{             //不能修改state
//                 visibilityFilter: action.filter
//             })
//         case ADD_TODO:
//             return Object.assign({},state,{
//                 todos: todos(state.todos,action)
//             })
//         case TOGGLE_TODO: 
//             return Object.assign({},state,{
//                 todos: todos(state.todos,action)
//             })
//         default:
//             return state
//     }
// }

// 将todo的业务逻辑拆分到单独函数中(此处state为 todos) 子reducer
function todos(state = [],action){
    switch (action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo,index)=>{
                if(index == action.index){
                    return Object.assign({},todo,{
                        completed: !todo.completed
                    })
                }
                return todo;
            })
        default:
            return state
    }
}

// 处理todos展示逻辑（隐藏或者展示全部）子reducer
function visibilityFilter(state = SHOW_ALL,action){
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

// 主reducer
// function todoApp(state = {},action){
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter,action),
//         todos: todos(state.todos,action)
//     }
// }

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp;