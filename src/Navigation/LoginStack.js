import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from '../pages/login';

const Stack = createStackNavigator();

const defaultConfig = {
    headerShown: false,
    // title: '登录页'
    // cardStyleInterpolator: forFade
};

const LoginStack = () => (
    <Stack.Navigator
        initialRouteName="loginStack"
        screenOptions={{ gestureEnabled: false }}
    >
        <Stack.Screen 
            name="Login" 
            component={LoginPage} 
            options={{headerShown: false,title: '登录页'}}
        />
    </Stack.Navigator>
)

export default LoginStack;