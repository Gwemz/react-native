import 'react-native-gesture-handler';
import React, { Component } from "react";
import { Text, View , StyleSheet, TouchableOpacity,Button,StatusBar } from "react-native";
// import SafeAreaView from "react-native-safe-area-view"
// import * as RootNavigation from '../RootNavigation'
import { useNavigation } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import NewsPage from './news'
// const navigation = useNavigation();
import MatchContainer from '../components/MatchContainer'

export default class Article extends Component{
    constructor(props){
        super(props)
        this.state = {
            carid: ''
        }
    }
    componentDidMount(){
        const route = this.props.route;
        if(route.params){
            let carid = route.params.carid;
            console.log(carid);
            // this.setState({
            //     carid: carid
            // })
        }
        // console.log('article页面被创建');
        // console.log(this.state);
    }
    render(){
        const navigation = this.props.navigation;

        // const navigation = useNavigation();
        // console.log(navigation);
        return (
            <TouchableOpacity activeOpacity={0.8} 
            // onPress={() => navigation.navigate('News')}
            >
            {/* <TouchableOpacity activeOpacity={0.8} onPress={() => RootNavigation.push('News',{
                id: 666,
                desc: '从主页而来'
            })}> */}
                <StatusBar barStyle="light-content"/>
                <View style={styles.container,styles.container2}>
                    <Text style={{color: "#ffffff",fontSize: 24}} onPress={() => navigation.navigate('MainStack')}>文章页面</Text>
                    {/* <Text>{{carid}}</Text> */}
                    <MatchContainer />
                </View>
            </TouchableOpacity>
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

// const Stack = createStackNavigator();
// export default function(props) {
//     const isFocused = useIsFocused();
//     return(
//       <Stack.Navigator
//         initialRouteName="Article"
//         headerMode="none"
//       >
//         <Stack.Screen name="Article" options={{title: 'Word List'}}>
//             {props => <Article {...props} isFocused={isFocused} />}
//         </Stack.Screen>
//         <Stack.Screen name="NewsPage" options={{title: 'Word Definition'}}>
//             {props => <NewsPage {...props}  />}
//         </Stack.Screen>
//       </Stack.Navigator>
//     );
// }