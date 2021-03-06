import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import News from '../pages/news';
import Part from '../pages/part'
import Webs from '../pages/web'
const Stack = createStackNavigator();

const defaultConfig = {
    headerShown: false
};

const MainStack = () => (
    <Stack.Navigator
        initialRouteName="MainStack"
        screenOptions={{ 
            gestureEnabled: false,
            headerStyle: {
                backgroundColor: 'orange',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}
    >
        <Stack.Screen 
            name="News" 
            component={News} 
            options={defaultConfig}
        />
        <Stack.Screen 
            name="Part" 
            component={Part} 
            options={defaultConfig}
        />
        <Stack.Screen 
            name="Webs" 
            component={Webs} 
            options={defaultConfig}
        />
    </Stack.Navigator>
)

export default MainStack;