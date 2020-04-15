import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import News from '../pages/news';
import Buttons from '../pages/button'
import Webs from '../pages/web'
const Stack = createStackNavigator();

const defaultConfig = {
    headerShown: false
};

const MainStack = () => (
    <Stack.Navigator
        initialRouteName="MainStack"
        screenOptions={{ gestureEnabled: false }}
    >
        <Stack.Screen 
            name="News" 
            component={News} 
            options={{headerShown: false,title: '新闻页'}}
        />
        <Stack.Screen 
            name="Buttons" 
            component={Buttons} 
            options={{headerShown: false,title: '按钮页'}}
        />
        <Stack.Screen 
            name="Webs" 
            component={Webs} 
            options={{headerShown: false,title: 'web页'}}
        />
    </Stack.Navigator>
)

export default MainStack;