import 'react-native-gesture-handler';
import React, { Component } from "react";
import { Text, View , StyleSheet, TouchableOpacity,Button,StatusBar,Linking,SafeAreaView } from "react-native";
import Header from '../components/header'
import commonStyles from '../../commonStyles'
// import { createStore } from 'redux';
import { connect } from 'react-redux'

// import {
//     addTodo,
//     toggleTodo,
//     setVisibilityFilter,
//     VisbilityFilters
// } from '../store/actions'
import actions from '../action'
import store from '../store/index'
import App from './counter'
console.log(App);
// function counter(state = 0, action) {
//     switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//     }
// }

// 子组件
class HomeChild extends Component{
    constructor(props){
        super(props)
        this.state = {
            carid: '',
            name: props.name || '大锅',
            age: '27'
        }
    }
    componentDidMount(){
        // const route = this.props.route;
        // if(route.params){
        //     let carid = route.params.carid;
        //     console.log(carid);
        // }
        // connect(actions.addLoginInfo)
        // let store = createStore(this.counter);
        // // console.log(store);
        // store.subscribe(() => {
        //     console.log(store.getState());
        // })
        // store.dispatch({type: 'INCREMENT'})
        // store.dispatch({type: 'INCREMENT'})
        // store.dispatch({type: 'DECREMENT'})
        // console.log(store.getState());

        // console.log(store.getState());
        // store.subscribe(()=>{
        //     console.log(store.getState());
        // })

        // // console.log(actions.addLoginInfo);
        // store.dispatch(actions.addLoginInfo({'name':'daguo'}))
        // store.dispatch(addTodo('这是大锅的第一个任务清单'));
        // store.dispatch(addTodo('大锅是个很好的人'))
        // store.dispatch(addTodo('大锅是个很牛叉的人'))
        // store.dispatch(toggleTodo(2))
        // store.dispatch(setVisibilityFilter(VisbilityFilters.SHOW_ACTIVE))

        // 停止监听state更新
        // unsubscribe();
    }
    // componentDidUpdate(){
    //     console.log(this.props);
    //     console.log('update');
    // }
    // counter(state = 0, action) {
    //     switch (action.type) {
    //     case 'INCREMENT':
    //       return state + 1;
    //     case 'DECREMENT':
    //       return state - 1;
    //     default:
    //       return state;
    //     }
    // }
    updateState = ()=> {
        const age = this.state.age == '27'?'正青春':'27';
        this.setState({age})
    }
    render(){
        const navigation = this.props.navigation;
        const {name,age} = this.state;
        return (
            <TouchableOpacity activeOpacity={0.8} 
            // onPress={() => navigation.navigate('MainStack')}
            onPress={this.updateState}
            >
                {/* <StatusBar barStyle="light-content"/> */}
                <View style={styles.container,styles.container2}>
                <Text style={{color: "#ffffff",fontSize: 24}}>项目负责人：{name} 年龄：{age}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

// 父组件
export default class HomePage extends Component{
    constructor(props){
        super(props)
        this.state = {
            who: 'me'
        }
    }
    componentDidUpdate(){
        console.log(this.props.route.params);
        if(this.props.route.params && this.props.route.params.flag){
            this.props.route.params.flag = false;
            console.log('update');
            // console.log(this.state.who);
            // this.setState({
            //     who: 'you'
            // })
        }
        // console.log('update');
    }
    render(){
        const {route} = this.props;
        const navigation = this.props.navigation;
        // console.log(route);
        return (
            <>
                <SafeAreaView style={commonStyles.content}>
                    <Header navigation={navigation} Title={'首页'} isAtRoot={true} />
                    <View>
                        <HomeChild name={'daguo'} />
                        <Text style={{color: '#ff9988',fontSize: 28,textAlign: 'center',lineHeight: 100}} 
                        // onPress={() => Linking.openURL('https://www.wdcorner.cn')}
                            onPress={() => {
                                navigation.navigate('Detail',{name: 'home'})
                            }}
                        >
                            area
                        </Text>
                    </View>
                    {App}
                </SafeAreaView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "orange"
    },
    topBox: {
        width: "100%",
        height: 50,
        backgroundColor: "#668899"
    },
    container2:{
        width: "100%",
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#dd3366"
    }
})

