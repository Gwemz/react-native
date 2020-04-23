import 'react-native-gesture-handler';
import React, { Component } from "react";
import { Text, View , StyleSheet, TouchableOpacity,Button,StatusBar,SafeAreaView } from "react-native";
// import SafeAreaView from "react-native-safe-area-view"
// import * as RootNavigation from '../RootNavigation'
// import { useNavigationState,useRoute } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import NewsPage from './news'
// const navigation = useNavigation();
import Article from './article'
import MatchContainer from '../components/MatchContainer'
import Header from '../components/header'
import commonStyles from '../../commonStyles'


export default class HomePage extends Component{
    constructor(props){
        super(props)
        this.state = {
            carid: ''
        }
    }
    componentDidMount(){
        
    }
    render(){
        // const {navigate,goBack,state} = this.props.navigation;
        const navigation = this.props.navigation;
        const {route} = this.props;
        console.log(route);
        return (
            <SafeAreaView style={commonStyles.content}>
                <Header navigation={this.props.navigation} Title={'车辆详情页'} />
                <TouchableOpacity activeOpacity={0.8} 
                // onPress={() => navigation.navigate('Detail',{id: 'bb'})}
                onPress={() => {
                    // navigate('Webs')
                    // state.params.callback('回调函数')
                    // console.log(state);
                    // goBack()
                    // console.log(route);
                    // navigation.state.params.onGoBack();
                    // navigation.pop()
                    // navigation.goBack()
                    navigation.navigate('Home',{name: 'detail',flag: true})
                }}
                >
                    {/* <StatusBar barStyle="light-content"/> */}
                    <View style={styles.container,styles.container2}>
                        <Text style={{color: "#ffffff",fontSize: 24}}>这是详情页</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
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
        backgroundColor: "#bb9966"
    }
})