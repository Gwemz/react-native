import React from "react";
import PropTypes from 'prop-types';
import {View} from 'react-native'
import Todo from './Todo'

const TodoList = ({todos, onTodoClick}) => {
    return (
        <View>
            {todos.map((todo,index)=>(
                <Todo key={index} {...todo} onClick={()=> onTodoClick(index)}/>
            ))}
        </View>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired 
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList;