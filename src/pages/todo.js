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
            storeState: {}
        }
    }
    componentDidMount(){
        // console.log(store);
        this.setState({
            storeState: store.getState()
        })
        store.subscribe(()=>{
            console.log(store.getState());
            this.setState({
                storeState: store.getState()
            })
        })
        store.dispatch(actions.addLoginInfo({name: '大锅',age: 18,sex: 'man'}))
        store.dispatch(actions.changeTheme('深空灰/砖石蓝'))
        // store.dispatch(addTodo('hi man, this is redux'))
        // store.dispatch(toggleTodo(0))
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
        const infos = this.state.storeState;
        return (
            <Provider store={store}>
                <SafeAreaView>
                    <Header navigation={navigation} Title={'todoList'} />
                    {/* <Text style={{fontSize: 20}}>{JSON.stringify(this.state.storeState)}</Text> */}
                    <View>
                        {/* {this.renderTodoItem()} */}
                        <Text style={styles.textSize}>信息：{JSON.stringify(infos)}</Text>
                        {/* <Text style={styles.textSize}>年龄：{this.state.storeState.age}</Text>
                        <Text style={styles.textSize}>性别：{this.state.storeState.sex}</Text> */}
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
    }
})

