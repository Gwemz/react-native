// import React from 'react'
// import MovieList from './containers/app'

// const Root = () => {
//     <MovieList />
// }

// export default Root;

// const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';

import 'react-native-gesture-handler';
import React, { Component } from "react";
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, Platform, NativeModules,ActivityIndicator } from "react-native";
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
const REQUEST_URL = 'http://m.hx2car.com/wap/getMoreCar.json';
// const Stack = createStackNavigator();

// function HomePart({navigation}){
//     return (
//         <FlatList data={this.state.data} renderItem={this.renderMovie} style={styles.list} keyExtractor={item => item.id} ListHeaderComponent={this.renderHeader.bind(this)} ListFooterComponent={this.renderFooter.bind(this)} onEndReached={this.scrollToEnd.bind(this)} />
//     )
// }

let navigation;

export default class CarList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false,           //默认无下拉刷新
            loaded: false,
            loadMoreState: 0,            //0 加载更多   1 加载更多失败  2 加载更多数据为空
            currPage: 1
        }
        this.fetchData = this.fetchData.bind(this);
        console.log(Platform.OS);
    }
    componentDidMount() {
        this.fetchData()
    }
    // 加载数据
    fetchData() {
        let currPage = this.state.currPage;
        fetch(REQUEST_URL,{
            method: 'POST',
            body: JSON.stringify({
                currPage: currPage,
                pageSize: 10
            })
        }).then((response) => response.json())
            .then((responseData) => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                // this.setState({
                //   movies: responseData.movies,
                // });
                let carList = currPage === 1?[]:this.state.data,
                loadMoreState = this.state.loadMoreState;
                // console.log(responseData);
                if(responseData.carList && responseData.carList.length > 0){
                    carList = carList.concat(responseData.carList)
                    loadMoreState = 0
                    currPage = (currPage + 1)
                    console.log(carList.length);
                }else{
                    loadMoreState = 2
                }
                this.setState({
                    data: carList,
                    loaded: true,
                    loadMoreState: loadMoreState,
                    currPage: currPage,
                    isLoading: false
                })
            }).catch(error => {
                this.setState({
                    loadMoreState: 1
                })
            })
    }
    render() {
        navigation = this.props.navigation;
        if (!this.state.loaded) {
            return this.renderLoadingView()
        }

        return (
            <View style={styles.pageContainer}>
                <FlatList 
                    data={this.state.data} 
                    renderItem={this.renderMovie} 
                    refreshing={this.state.isLoading} 
                    onRefresh={() => {this.loadData()}} 
                    style={styles.list} 
                    // keyExtractor={item => item.id}

                    // 设置上拉加载
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={()=>this.renderLoadMoreView()}
                    onEndReached={()=>this.loadMoreData()}
                />
            </View>
        )
    }

    renderLoadingView() {
        let loadMoreState = this.state.loadMoreState;
        if(loadMoreState == 0){
            return (
                <View style={styles.loadbox}>
                    <ActivityIndicator size="large" color="#573D1B"/>
                    <Text style={styles.loadText}>正在加载车辆数据...</Text>
                </View>
            )
        }else if(loadMoreState == 1){
            return (
                <View style={styles.loadbox}>
                    {/* <ActivityIndicator size="large" color="#573D1B"/> */}
                    <Text style={styles.loadText}>加载失败，点击重试</Text>
                </View>
            )
        }else if(loadMoreState == 2){
            return (
                <View>
                    {/* <ActivityIndicator size="large" color="#573D1B"/> */}
                    <Text style={styles.loadText}>暂无更多数据</Text>
                </View>
            )
        }
    }

    renderFooter() {
        return (
            <Text>page footer</Text>
        )
    }

    renderHeader() {
        return (
            <Text>page Header</Text>
        )
    }

    scrollToEnd() {
        console.log('滚动到页面底部');
    }

    itemPress() {
        console.log('item点击');
    }
    // 下拉刷新
    loadData(){
        console.log('下拉刷新');
        this.setState({
            isLoading: true,
            currPage: 1
        })
        this.fetchData()
    }

    renderLoadMoreView(){
        return (
            <View style={styles.loadmoreItem}>
                <ActivityIndicator size="small" color="#573D1B"/>
                <Text style={styles.loadText}>正在加载更多...</Text>
            </View>
        )
    }

    // 上拉加载
    loadMoreData(){
        let currPage = this.state.currPage;
        console.log('上拉加载' + currPage);
        this.fetchData()
    }

    renderMovie({ item }) {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Article',{
                carid: item.id
            })}>
                <View style={styles.container}>
                    <Image style={styles.thumbnail} source={{ uri: item.firstphoto }} />
                    <View style={styles.rightContainer}>
                        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                        {/* <Text style={styles.year}>上牌日期：{item.usedate}</Text> */}
                        <Text style={styles.price}>￥{item.price}元</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'flex-start',
        backgroundColor: "#ffffff",
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1'
    },
    thumbnail: {
        width: 144,
        height: 108
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginLeft: 20,
        height: '100%'
    },
    title: {
        fontSize: 16,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        color: '#444444'
    },
    year: {
        textAlign: 'left',
        fontSize: 16,
        color: '#333333'
    },
    list: {
        paddingBottom: 25,
        backgroundColor: '#F5FCFF'
    },
    price: {
        color: '#ff6600',
        fontSize: 20
    },
    loadbox:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadText:{
        marginLeft: 10,
        fontSize: 20,
        color: '#333333'
    },
    loadmoreItem: {
        padding: 20,
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pageContainer: {
        backgroundColor: '#ffffff'
    }
});

