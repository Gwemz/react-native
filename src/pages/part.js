import 'react-native-gesture-handler';
import React, { Component } from "react";
import { Text, View , StyleSheet, TouchableOpacity,Button } from "react-native";

export default class ButtonPart extends Component{
    render(){
        const navigation = this.props.navigation;
        return (
            <View style={styles.pageContainer}>
                <Text style={{color: '#ffffff',fontSize: 24}} onPress={()=> navigation.navigate('News')}>这是Part页面</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pageContainer:{
        width: "100%",
        height: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffcc00"
    }
})