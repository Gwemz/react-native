import React from "react";
import PropTypes from 'prop-types';
import {View,TouchableOpacity,Text} from 'react-native'

const Todo = ({onClick,completed,text}) => {
    return (
        <TouchableOpacity onPress={onClick}>
            <View style={{textDecoration: completed?'line-through':'none'}}>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text:  PropTypes.string.isRequired
}

export default Todo;