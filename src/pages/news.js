import 'react-native-gesture-handler';
import React, { Component } from "react";
import { Text, View , StyleSheet, TouchableOpacity, TouchableHighlight, PanResponder , Image,StatusBar,SafeAreaView} from "react-native";
import { useNavigation,useRoute } from '@react-navigation/native';
import Header from '../components/header'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// const Stack = createStackNavigator();

// PanResponder.create({
//     onStartShouldSetPanResponder: (evt,gestureState)=> true,
//     onStartShouldSetPanResponderCapture: (evt,gestureState)=> true,
//     onMoveShouldSetPanResponder: (evt,gestureState) => true,
//     onMoveShouldSetPanResponderCapture: (evt,gestureState) => true,
//     onPanResponderTerminationRequest: (evt,gestureState) => true
// })
const imgurl = 'http://p4.music.126.net/U8gz-goWF6O0KNWxAQN01Q==/109951163870763627.jpg';
export default class NewsPage extends Component{
    componentDidMount(){
        // console.log('news页面被创建');
    }
    // _onPressIn(){
    //     console.log('press in');
    // }
    // _onPressOut(){
    //     console.log('press out');
    // }
    // _onPress(){
    //     console.log('press')
    // }
    // _onLongPress(){
    //     console.log('press long');
    // }
    // show(){
    //     alert('This is text part');
    // }
    render(){
        const navigation = this.props.navigation;
        // navigation.setOptions({headerTitle: '新闻页'});
        // console.log(this.props.navigation);
        return (
            <SafeAreaView>
                <Header navigation={this.props.navigation} Title={'新闻页'} />
                <View style={styles.container}>
                    {/* <StatusBar barStyle="dark-content" backgroundColor="#6a51ae" /> */}
                    {/* <TouchableHighlight style={styles.box} onPress={()=>this.show()}>
                        <Text style={{fontSize: 24,textAlign: 'center',lineHeight: 100}}>This is text part</Text>
                    </TouchableHighlight> */}
                    {/* 加载本地图片 */}
                    {/* <Image source={require('../img/share_icon_wechat.png')} /> */}
                    {/* 加载网络图片 */}
                    {/* <TouchableHighlight style={styles.box} onPress={()=> navigation.navigate('Webs')}> */}
                        <Image style={[styles.imgSize]} source={{uri: imgurl}} />
                    {/* </TouchableHighlight> */}
                    {/* 加载base64图片 */}
                    {/* <Image style={{width: 150,height: 150}} source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}/> */}
                    <Text onPress={()=> navigation.goBack()} style={{fontSize: 24,textAlign: 'center',lineHeight: 100,color: '#ffffff'}}>返回上一页</Text>
                    <Text onPress={()=> navigation.navigate('Detail')} style={{fontSize: 24,textAlign: 'center',lineHeight: 100,color: '#ffffff'}}>跳转Page页</Text>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        width: "100%",
        // height: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ff6600",
        paddingTop: 50
    },
    topBox: {
        width: "100%",
        height: 50,
        backgroundColor: "#668899"
    },
    box:{
        width: "100%",
        height: 100,
        backgroundColor: '#f8d9e0'
    },
    item:{
        width: 100,
        height: 100,
        backgroundColor: '#bb3399'
    },
    imgSize: {
        width: 200,
        height: 150,
        backfaceVisibility: "hidden",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#ffffff",
        resizeMode: 'cover',
        // tintColor: '#efef55'
    }
})