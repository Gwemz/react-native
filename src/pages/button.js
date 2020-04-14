import 'react-native-gesture-handler';
import React, { Component } from "react";
import { Text, View , StyleSheet, TouchableOpacity,Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import movieList from '../root'
const Stack = createStackNavigator();
// console.log(movieList);
function HomeButton({navigation}){
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Cars')}>
            <View style={styles.container}>
                <Text style={{color: "#000000",fontSize: 24}}>按钮页面</Text>
            </View>
        </TouchableOpacity>
    )
}

function NewsPart({route,navigation}){
    console.log(route.params);
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('News',{
            id: 666,
            desc: '从主页而来'
        })}>
            <View style={styles.container,styles.container2}>
                <Text style={{color: "#ffffff",fontSize: 24}}>新闻页面</Text>
            </View>
        </TouchableOpacity>
    )
}

export default class ButtonPart extends Component{
    render(){
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeButton} options={{title: '主页',headerStyle:{
                        backgroundColor: '#f4511e'
                    },
                    headerTintColor: '#ffffff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerRight: () => (
                        <Button
                          onPress={() => alert('This is a button!')}
                          title="更多"
                          color="#fff"
                        />
                    )
                    }}></Stack.Screen>
                    {/* <Stack.Screen name="News" component={NewsPart} options={{title: '新闻页'}}></Stack.Screen> */}
                    <Stack.Screen name="News" component={NewsPart} options={({route})=>({title: route.params.desc})}></Stack.Screen>
                    <Stack.Screen name="Cars" component={movieList}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
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
        backgroundColor: "#ffcc00"
    },
    topBox: {
        width: "100%",
        height: 50,
        backgroundColor: "#668899"
    },
    container2:{
        width: "100%",
        height: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ddcc88"
    }
})