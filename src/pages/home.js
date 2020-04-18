import 'react-native-gesture-handler';
import React, { Component } from "react";
import { Text, View , StyleSheet, TouchableOpacity,Button,StatusBar,Linking } from "react-native";
// import SafeAreaView from "react-native-safe-area-view"
// import * as RootNavigation from '../RootNavigation'
import { useNavigation } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import NewsPage from './news'
// const navigation = useNavigation();
import MatchContainer from '../components/MatchContainer'

// 子组件
class HomeChild extends Component{
    constructor(props){
        super(props)
        this.state = {
            carid: '',
            name: props.name || '大锅',
            age: '28'
        }
    }
    componentDidMount(){
        // const route = this.props.route;
        // if(route.params){
        //     let carid = route.params.carid;
        //     console.log(carid);
        // }
    }
    updateState = ()=> {
        const age = this.state.age == '28'?'正青春':'28';
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
                <StatusBar barStyle="light-content"/>
                <View style={styles.container,styles.container2}>
                <Text style={{color: "#ffffff",fontSize: 24}}>项目负责人：{name} 年龄：{age}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

// 父组件
export default class HomePage extends Component{
    render(){
        return (
            <View>
                <HomeChild name={'wdcorner'} />
                <Text style={{color: '#ff9988',fontSize: 28,textAlign: 'center',lineHeight: 100}} onPress={() => Linking.openURL('https://www.wdcorner.cn')}>
                    area
                </Text>
            </View>
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

