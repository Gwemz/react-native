import 'react-native-gesture-handler';
import React, { Component } from "react";
import { Text, View , StyleSheet, TouchableOpacity,Button,Image } from "react-native";
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CarList from './pages/cars'
import ArticlePage from './pages/article'
import NewsPage from './pages/news'
import LoginPage from './pages/login'
import AdvPage from './pages/adv'
import WebViews from './pages/web'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#ffffff',
      card: '#ff6600',
      text: '#ffffff',
      background: '#ffffff',
      border: '#e1e1e1'
    },
};
  

function HomeStackScreen(){
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? require('../source/image/home_HL.png') : require('../source/image/home.png');
                    } else if (route.name === 'About') {
                        iconName = focused ? require('../source/image/my_icon_HL.png') : require('../source/image/my_icon.png');
                    }
                    return <Image source={iconName} style={{width: 30,height: 30}}/>
                },
            })}
            tabBarOptions={{
                activeTintColor: 'brown',
                activeBackgroundColor: '#ffffff',
                inactiveTintColor: '#666666',
                inactiveBackgroundColor: '#ffffff'
            }}
        >
            <Tab.Screen name="Home" component={CarList} options={{
                title: '主页',
            }}></Tab.Screen>
            <Tab.Screen name="About" component={AdvPage} options={{
                title: '关于',
            }}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default class ButtonPart extends Component{
    render(){
        return (
            <NavigationContainer theme={MyTheme}>
                <Stack.Navigator>
                    <Stack.Screen 
                        name="HomePage" 
                        component={HomeStackScreen} 
                        options={{
                            title: '列表页',
                            headerStyle: {
                                backgroundColor: '#ff6600'
                            },
                            headerTintColor: '#ffffff'
                        }}
                    ></Stack.Screen>
                    <Stack.Screen name="Article" component={ArticlePage} options={{title: '文章页'}}></Stack.Screen>
                    <Stack.Screen name="News" component={NewsPage} options={{title: '新闻页'}}></Stack.Screen>
                    <Stack.Screen name="Login" component={LoginPage} options={{title: '登录页'}}></Stack.Screen>
                    <Stack.Screen name="Webs" component={WebViews} 
                        options={{title: '移动页',
                            headerStyle: {
                                backgroundColor: '#ff6600'
                            },
                            headerTintColor: '#ffffff'
                        }}
                    ></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
