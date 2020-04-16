import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Image} from "react-native";
import CarList from '../pages/cars'
// import Article from '../pages/article'
import Home from '../pages/home'
import AdvPage from '../pages/adv'

const Tab = createBottomTabNavigator();

const FooterTabNav = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = focused ? require('../../source/image/home_HL.png') : require('../../source/image/home.png');
                }else if(route.name === 'Find'){
                    iconName = focused ? require('../../source/image/buy_HL.png'): require('../../source/image/buy.png')
                }else if (route.name === 'About') {
                    iconName = focused ? require('../../source/image/my_icon_HL.png') : require('../../source/image/my_icon.png');
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
        <Tab.Screen name="Home" component={Home} options={{
            title: '首页',
        }}></Tab.Screen>
        <Tab.Screen name="Find" component={CarList} options={{
            title: '找车页',
        }}></Tab.Screen>
        <Tab.Screen name="About" component={AdvPage} options={{
            title: '关于',
        }}></Tab.Screen>
    </Tab.Navigator>
)

export default FooterTabNav;