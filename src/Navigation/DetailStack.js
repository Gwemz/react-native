import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from '../pages/detail';
const Stack = createStackNavigator();

const defaultConfig = {
    headerShown: false
};

const DetailStack = () => (
    <Stack.Navigator
        initialRouteName="DetailStack"
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
            name="Detail" 
            component={Detail} 
            options={defaultConfig}
        />
    </Stack.Navigator>
)

export default DetailStack;