import React, { Component } from "react";
import { StyleSheet} from "react-native";
import { WebView } from "react-native-webview";
let source = "http://m.hx2car.com?from=reactnative";

export default class WebPage extends Component{
    render(){
        // const navigation = this.props.navigation;
        return (
            <WebView style={styles.container} source={{uri: source}}/>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width: '100%'
    }
})