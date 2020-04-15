import 'react-native-gesture-handler';
import React,{ Component } from "react";
import { Text, View , StyleSheet, TouchableOpacity,Button,Image } from "react-native";
import RootStack from './Navigation/RootStack';

export default class ButtonPart extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLogin: true
        }
    }
    render(){
        // let isLogin = this.state.isLogin;
        return (
            <RootStack />
        )
    }
}
