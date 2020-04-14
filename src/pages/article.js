import 'react-native-gesture-handler';
import React, { Component } from "react";
import { Text, View , StyleSheet, TouchableOpacity,Button } from "react-native";
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
        // console.log(this.state);
    }
    render(){
        const navigation = this.props.navigation;
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('News',{
                id: 666,
                desc: '从主页而来'
            })}>
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