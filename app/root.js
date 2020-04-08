import 'react-native-gesture-handler';
import React, { Component } from "react";
import { Text, View , StyleSheet, TouchableOpacity,Button,Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons'
import CarList from './pages/cars'
import ArticlePage from './pages/article'
import NewsPage from './pages/news'
import LoginPage from './pages/login'
import AdvPage from './pages/adv'
import WebViews from './pages/web'
// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
// console.log(Icon);
function HomeStackScreen(){
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen 
                name="Cars" 
                component={CarList} 
                options={{
                    title: '列表页',
                    headerStyle: {
                        backgroundColor: '#ff6600'
                    },
                    headerTintColor: '#ffffff'
                }}
            ></HomeStack.Screen>
            <HomeStack.Screen name="Article" component={ArticlePage} options={{title: '文章页'}}></HomeStack.Screen>
            <HomeStack.Screen name="News" component={NewsPage} options={{title: '新闻页'}}></HomeStack.Screen>
        </HomeStack.Navigator>
    )
}

const AboutStack = createStackNavigator();

function AboutStackScreen(){
    return (
        <AboutStack.Navigator>
            <AboutStack.Screen name="Adv" component={AdvPage} 
                options={{
                    title: '广告页',
                    headerStyle: {
                        backgroundColor: '#dd4499'
                    },
                    headerTintColor: '#ffffff'
                }}></AboutStack.Screen>
            <AboutStack.Screen name="Login" component={LoginPage} options={{title: '登录页'}}></AboutStack.Screen>
            <AboutStack.Screen 
                name="Webs" component={WebViews} options={{title: '移动页',
                    headerStyle: {
                        backgroundColor: '#ff6600'
                    },
                    headerTintColor: '#ffffff'
                }}
            ></AboutStack.Screen>
        </AboutStack.Navigator>
    )
}

export default class ButtonPart extends Component{
    render(){
        return (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;
                            if (route.name === 'Home') {
                                iconName = focused ? require('../source/image/main_choice_click.png') : require('../source/image/main_choice.png');
                            } else if (route.name === 'About') {
                                iconName = focused ? require('../source/image/icon_cartoon_nor_click.png') : require('../source/image/icon_cartoon_nor.png');
                            }
                            return <Image source={iconName} style={{width: 20,height: 20}}/>
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: 'brown',
                        inactiveTintColor: '#666666',
                    }}
                >
                    <Tab.Screen name="About" component={AboutStackScreen} options={{
                        title: '关于'
                    }}></Tab.Screen>
                    <Tab.Screen name="Home" component={HomeStackScreen} options={{
                        title: '主页'
                    }}></Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}

// const styles = StyleSheet.create({
//     container:{
//         width: "100%",
//         height: 300,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "#ffcc00"
//     },
//     topBox: {
//         width: "100%",
//         height: 50,
//         backgroundColor: "#668899"
//     },
//     container2:{
//         width: "100%",
//         height: 500,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "#ddcc88"
//     }
// })