import 'react-native-gesture-handler';
import React, { Component } from "react";
import { Text, View , StyleSheet, TouchableOpacity,Button,StatusBar } from "react-native";
import SafeAreaView from "react-native-safe-area-view"
import * as RootNavigation from '../RootNavigation'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// const Stack = createStackNavigator();

export default class articlePage extends Component{
    constructor(props){
        super(props)
        this.state = {
            carid: ''
        }
    }
    componentDidMount(){
        const route = this.props.route;
        if(route.params){
            let carid = route.params.carid;
            console.log(carid);
            // this.setState({
            //     carid: carid
            // })
        }
        // console.log('article页面被创建');
        // console.log(this.state);
    }
    render(){
        // const navigation = this.props.navigation;
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => RootNavigation.navigate('News',{
                id: 666,
                desc: '从主页而来'
            })}>
            {/* <TouchableOpacity activeOpacity={0.8} onPress={() => RootNavigation.push('News',{
                id: 666,
                desc: '从主页而来'
            })}> */}
                <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
                <View style={styles.container,styles.container2}>
                    <Text style={{color: "#ffffff",fontSize: 24}}>文章页面</Text>
                    {/* <Text>{{carid}}</Text> */}
                </View>
            </TouchableOpacity>
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
        backgroundColor: "#ffcc00"
    },
    topBox: {
        width: "100%",
        height: 50,
        backgroundColor: "#668899"
    },
    container2:{
        width: "100%",
        height: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ddcc88"
    }
})