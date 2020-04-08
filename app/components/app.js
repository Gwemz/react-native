// const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';
const REQUEST_URL = 'http://m.hx2car.com/wap/getMoreCar.json?pageSize=30';

import React, { Component } from "react";
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, Platform } from "react-native";

export default class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false
        }
        this.fetchData = this.fetchData.bind(this);
        console.log(Platform.OS);
    }
    componentDidMount() {
        this.fetchData()
    }
    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                // this.setState({
                //   movies: responseData.movies,
                // });
                this.setState({
                    data: this.state.data.concat(responseData.carList),
                    loaded: true
                })
                // console.log(responseData.movies);
            });
    }
    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView()
        }

        return (
            <FlatList data={this.state.data} renderItem={this.renderMovie} style={styles.list} keyExtractor={item => item.id} ListHeaderComponent={this.renderHeader.bind(this)} ListFooterComponent={this.renderFooter.bind(this)} onEndReached={this.scrollToEnd.bind(this)} />
        )
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>正在加载车辆数据...</Text>
            </View>
        )
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

    renderMovie({ item }) {
        return (
            <TouchableOpacity onPress={() => { alert('点击了View') }}>
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
        // alignItems: "center",
        alignItems: 'flex-start',
        backgroundColor: "#F5FCFF",
        // marginBottom: 50,
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1'
    },
    thumbnail: {
        // width: 53,
        // height: 81
        width: 144,
        height: 108
    },
    rightContainer: {
        flex: 1,
        // display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginLeft: 20,
        height: '100%'
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        // textAlign: 'center',
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
        paddingTop: 25,
        paddingBottom: 25,
        // paddingLeft: 20,
        // paddingRight: 20,
        backgroundColor: '#F5FCFF'
    },
    price: {
        color: '#ff6600',
        fontSize: 20
    }
});