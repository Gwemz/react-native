import 'react-native-gesture-handler';
import React, { Component } from "react";
import { Text, View , StyleSheet, TouchableOpacity,Button,StatusBar,Linking,SafeAreaView } from "react-native";
import Header from '../components/header'
// import { createStore } from 'redux';
import { connect } from 'react-redux'
import actions from '../action'
// import store from '../store/index'

// 子组件
class TodoPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            // storeState: store.getState()
        }
    }
    componentDidMount(){
        // store.subscribe(() => {
        //     this.setState({
        //         storeState: store.getState()
        //     })
        // })
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
        const {logininfo,theme,addLoginInfo,changeTheme} = this.props;
        console.log(logininfo,theme)
        return (
            <SafeAreaView>
                <Header navigation={navigation} Title={'列表'} />
                <View>
                    <Text style={styles.textSize}>logininfo:{JSON.stringify(logininfo)}</Text>
                    <Text style={styles.textSize}>theme: {JSON.stringify(theme)}</Text>
                    {/* <Text style={styles.textSize}>信息：{JSON.stringify(this.state.storeState)}</Text> */}
                    <TouchableOpacity onPress={() => addLoginInfo({name: '大锅',age: 18,sex: 'man'})}>
                        <Text style={styles.storeSize}>添加用户信息</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeTheme('深空灰/钻石蓝💎')}>
                        <Text style={styles.storeSize}>添加页面主题</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
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

const mapStateToProps = state => ({
    logininfo: state.logininfo,
    theme: state.theme
});

const mapDispatchToProps = dispatch => ({
    addLoginInfo: (value) => dispatch(actions.addLoginInfo(value)),
    changeTheme: (theme) => dispatch(actions.changeTheme(theme))
});

export default connect(mapStateToProps,mapDispatchToProps)(TodoPage);