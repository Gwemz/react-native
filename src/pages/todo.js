import 'react-native-gesture-handler';
import React, { Component } from "react";
import { Text, View , StyleSheet, TouchableOpacity,Button,StatusBar,Linking,SafeAreaView } from "react-native";
import Header from '../components/header'
// import { createStore } from 'redux';
import { Provider } from 'react-redux'
import actions from '../action'
import store from '../store/index'
// import {createStore} from 'redux'
// import todoApp from '../store/reducers'
// import { addTodo,toggleTodo } from '../todoStore/action'
// import todoApp from '../todoStore/reduce'
// import TodoList from '../components/TodoList'

// let store = createStore(todoApp);
// console.log(store);
// 子组件
export default class TodoPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            carid: '',
            name: '大锅',
            age: '27',
            storeState: store.getState()
        }
    }
    componentDidMount(){
        store.subscribe(() => {
            // console.log('hi man ,focus . redux有变化！');
            this.setState({
                storeState: store.getState()
            })
        })

        // 添加日志功能
        // let next = store.dispatch;
        // store.dispatch = function dispatchAndLog(action){
        //     // 发出action
        //     console.log('dispatch',action);         
        //     // 执行reducer
        //     next(action)
        //     console.log('next state',store.getState());
        // }

    }
    renderTodoItem(){
        let todoList = [],
            storeState = this.state.storeState.todos;
        for(let i in storeState){
            todoList.push(
                <View>
                    <Text style={styles.textSize}>{storeState[i].id} {storeState[i].text}</Text>
                </View>
            )
        }
        return todoList;
    }
    render(){
        const navigation = this.props.navigation;
        return (
            <Provider store={store}>
                <SafeAreaView>
                    <Header navigation={navigation} Title={'todoList'} />
                    {/* <Text style={{fontSize: 20}}>{JSON.stringify(this.state.storeState)}</Text> */}
                    <View>
                        <Text style={styles.textSize}>信息：{JSON.stringify(this.state.storeState)}</Text>
                        <TouchableOpacity onPress={() => store.dispatch(actions.addLoginInfo({name: '大锅',age: 18,sex: 'man'}))}>
                            <Text style={styles.storeSize}>添加用户信息</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => store.dispatch(actions.changeTheme('深空灰/钻石蓝💎'))}>
                            <Text style={styles.storeSize}>添加页面主题</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </Provider>
        )
    }
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
        lineHeight: 50
    }
})

