import React,{ Component } from "react";
import {StatusBar} from 'react-native';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from "react-native-safe-area-context";

import FooterTabs from './FooterTabs'
import LoginStack from './LoginStack'
import MainStack from './MainStack'
import DetailStack from './DetailStack'
import Webs from '../pages/web'
// import Article from '../pages/article'
// import Detail from '../pages/detail'

const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#333333',
      card: '#ffffff',  
      text: '#333333',
      background: '#ffffff',
      border: '#e1e1e1'
    },
};

function getHeaderTitle(route) {
    const routeName = route.state
      ? // Get the currently active route name in the tab navigator
        route.state.routes[route.state.index].name
      : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
        // In our case, it's "Feed" as that's the first screen inside the navigator
        route.params?.screen || 'Home';
    switch (routeName) {
      case 'Home':
        return '首页';
      case 'Find':
        return '找车页';
      case 'About':
        return '关于';
    }
}

const Stack = createStackNavigator();

const App = () => (
    <SafeAreaProvider>
        <NavigationContainer theme={MyTheme}>
            <StatusBar barStyle="default" backgroundColor="#219bd9" />
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerBackTitleVisible: false
                }}
            >
                <Stack.Screen 
                    name="FooterTabs" 
                    component={FooterTabs} 
                    options={({ route })=>({
                        headerTitle: getHeaderTitle(route),
                        headerShown: false
                    })}
                />
                <Stack.Screen 
                    name="LoginStack" 
                    component={LoginStack} 
                    options={{title: '登录页'}} 
                />
                <Stack.Screen 
                    name="MainStack" 
                    component={MainStack} 
                    options={{title: '内部页',headerShown: true}}
                />
                <Stack.Screen 
                    name="Webs" 
                    component={Webs} 
                    options={{title: 'web页'}}
                />
                {/* <Stack.Screen 
                    name="Article" 
                    component={Article} 
                    options={{title: '文章页'}}
                /> */}
                <Stack.Screen 
                    name="Detail" 
                    component={DetailStack} 
                    options={{title: '车辆详情',headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
)

export default App;