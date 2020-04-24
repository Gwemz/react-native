import 'react-native-gesture-handler';
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Text, View , StyleSheet, TouchableOpacity,Button,StatusBar,Linking,SafeAreaView } from "react-native";
import Header from '../components/header'
import {applyMiddleware,createStore} from 'redux'
import { Provider,connect } from 'react-redux'
// import actions from '../action'
// import store from '../store/index'
import createLogger from 'redux-logger'

// 视图层
class Counter2 extends Component{
    render(){
        const { value,onIncreaseClick } = this.props;
        return (
            <>
                <View>
                    <Text style={{fontSize: 18,color: '#999999',textAlign: 'center'}}>本事例将数据实时存储到redux中:</Text>
                    <Text style={styles.textSize}> {value} </Text>
                    <Text style={styles.storeSize} onPress={()=>onIncreaseClick()}>增加</Text>
                </View>
            </>
        )
    }
}

Counter2.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    textSize: {
        fontSize: 24,
        color: '#333333',
        textAlign: 'center',
        lineHeight: 50
    },
    storeSize: {
        color: '#ff8866',
        fontSize: 22,
        lineHeight: 50,
        textAlign: 'center'
    }
})

// action
const increaseAction = {type: 'increase'};

// reducer
function counter(state = {count: 0},action){
    const count = state.count;
    switch (action.type){
        case 'increase':
            return {
                count: count + 1
                // count: 2
            }
        default: 
            return state;
    }
}

// store
const store = createStore(counter,applyMiddleware(createLogger))

// 将redux中数据传递到视图层
function mapStateToProps(state){
    return {
        value: state.count
    }
}

// 定义了用户的行为操作，传递给store
function mapDispatchToProps(dispatch){
    return {
        onIncreaseClick: ()=> dispatch(increaseAction)
    }
}

// 连接视图层（UI层）与逻辑层
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter2)

export default <Provider store={store}>
    <App />
</Provider>;
