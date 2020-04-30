import 'react-native-gesture-handler';
import React, { Component } from "react";
import { Text, View , StyleSheet, TouchableOpacity,Button,StatusBar,SafeAreaView, SectionList,ScrollView } from "react-native";
// import SafeAreaView from "react-native-safe-area-view"
// import * as RootNavigation from '../RootNavigation'
// import { useNavigationState,useRoute } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import NewsPage from './news'
// const navigation = useNavigation();
import Article from './article'
import MatchContainer from '../components/MatchContainer'
import Header from '../components/header'
import commonStyles from '../../commonStyles'

const overrideRenderItem = ({ item, index, section: { title, data } }) => <Text key={index}>Override{item}</Text>
export default class HomePage extends Component{
    constructor(props){
        super(props)
        this.state = {
            carid: ''
        }
    }
    componentDidMount(){
        
    }
    render(){
        // const {navigate,goBack,state} = this.props.navigation;
        const navigation = this.props.navigation;
        const {route} = this.props;
        console.log(route);
        return (
            // <ScrollView style={{backgroundColor: '#cc8866',flex: 1}}>
                <SafeAreaView style={commonStyles.content,{backgroundColor: '#ff8866',flex: 1}}>
                    <Header navigation={this.props.navigation} Title={'车辆详情页'} />
                    {/* <TouchableOpacity activeOpacity={0.8} 
                    onPress={() => {
                        
                    }}
                    >
                        <View style={styles.container,styles.container2}>
                            <Text style={{color: "#ffffff",fontSize: 24}}>这是详情页</Text>
                        </View>
                    </TouchableOpacity> */}
                    {/* sectionList列表 */}

                    {/* <SectionList 
                        renderItem={({item,index,section})=> <Text key={index} style={{fontSize: 18}}>{section.title}&nbsp;&nbsp;&nbsp;&nbsp;{item}</Text>}
                        renderSectionHeader={({section: {title}}) => (
                            <Text style={{fontWeight: 'bold',lineHeight: 50,fontSize: 24}}>{title}</Text>
                        )}
                        sections={[
                            { title: "Title1", data: ["item1", "item2"] },
                            { title: "Title2", data: ["item3", "item4"] },
                            { title: "Title3", data: ["item5", "item6"] }
                        ]}
                        keyExtractor={(item,index) => item + index}
                    /> */}

                    <SectionList 
                        renderItem={({item,index,section})=> <Text key={index}>{item}</Text>}
                        sections={[
                            { title: 'Title1', data: ['item1', 'item2'], renderItem: overrideRenderItem },
                            { title: 'Title2', data: ['item3', 'item4'] },
                            { title: 'Title3', data: ['item5', 'item6'] },
                        ]}
                        keyExtractor={(item,index) => item + index}
                    />
                </SafeAreaView>
            // </ScrollView>
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
        // backgroundColor: "orange"
    },
    topBox: {
        width: "100%",
        height: 50,
        backgroundColor: "#668899"
    },
    container2:{
        width: "100%",
        height: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#bb9966"
    }
})