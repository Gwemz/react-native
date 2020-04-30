import 'react-native-gesture-handler';
import React, { Component } from "react";
import { Text, View , StyleSheet, TouchableOpacity,SafeAreaView, FlatList,RefreshControl,ActivityIndicator} from "react-native";
import Header from '../components/header'
import commonStyles from '../../commonStyles'

const CITY_NAMES = ['北京', '上海', '广州', '深圳', '杭州', '苏州', '成都', '武汉', '郑州', '洛阳', '厦门', '青岛', '拉萨'];
export default class FlatListPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            dataArray: CITY_NAMES,
            isLoading: false
        }
    }
    componentDidMount(){
        
    }
    _renderItem(data){
        return <View style={styles.item}>
            <Text style={styles.text}>{data.item}</Text>
        </View>
    }
    loadData(refresh){
        if(refresh){        //下拉刷新
            this.setState({
                isLoading: true
            })
            console.log('下拉刷新')
        }else{
            console.log('上拉加载');
        }
        
        setTimeout(()=>{
            let dataArray = [];
            if(refresh){
                for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
                    dataArray.push(this.state.dataArray[i])
                }
            }else{
                dataArray = this.state.dataArray.concat(CITY_NAMES)
            }
            this.setState({
                dataArray: dataArray,
                isLoading: false
            })
        },2000)
    }

    genIndicator(){
        return <View style={styles.indicatorContainer}>
            <ActivityIndicator
                style={styles.indicator}
                size='large'
                animating={true}
            />
            <Text>正在加载更多</Text>
        </View>
    }

    render(){
        return (
            <SafeAreaView style={commonStyles.content,{backgroundColor: '#ffffff',flex: 1}}>
                <Header navigation={this.props.navigation} Title={'FlatList'} />
                <FlatList
                    data={this.state.dataArray}
                    renderItem={(data => this._renderItem(data))}
                    // refreshing={this.state.isLoading}
                    // onRefresh={() => {
                    //     this.loadData();
                    // }}
                    refreshControl={
                        <RefreshControl
                            title='更新中...'
                            colors={['#ee9966']}
                            refreshing={this.state.isLoading}
                            onRefresh={() => this.loadData(true)}
                            tintColor={'orange'}
                        />
                        // <Text>加载中...</Text>
                    }
                    ListFooterComponent={() => this.genIndicator()}
                    onEndReached={() => {
                        this.loadData()
                    }}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        height: 200,
        backgroundColor: '#169',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20
    },
    indicatorContainer: {
        alignItems: "center"
    },
    indicator: {
        color: 'red',
        margin: 10
    }
})