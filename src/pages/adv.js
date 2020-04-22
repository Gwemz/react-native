import React, { Component } from "react";
import { Text, View , StyleSheet, TouchableOpacity,Button,TextInput,ScrollView,Image,Dimensions,StatusBar,SafeAreaView} from "react-native";
// import Swiper from 'react-native-swiper';
import Banner from  '../components/Banner'
import Header from '../components/header'
import commonStyles from '../../commonStyles'
import store from '../store/index'
let imgsData = ['http://www.hx2car.com/upload/daily/normal/MobileIndexPage/MobileIndexTop/2019/20191119190919.jpg','http://www.hx2car.com/upload/daily/normal/MobileIndexPage/MobileIndexTop/2020/20200327165930.jpg','http://www.hx2car.com/upload/daily/normal/MobileIndexPage/MobileIndexTop/2020/20200327100115.jpg']
let screeWidth = Dimensions.get('window').width;
export default class AdvPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            currentPage: 0
        }
    }
    componentDidMount(){
        console.log(store.getState());
    }
    changeText(text){
        // console.log(text);
    }
    renderImages(){
        let allImgs = [];
        for(let i in imgsData){
            allImgs.push(
                <Image key={i} source={{uri: imgsData[i]}} style={styles.imgStyle} key={i}/>
            )
        }
        return allImgs;
    }
    renderPagingPoint(){
        let pointArr = [];
        let style;
        for(let i in imgsData){
            style = (i == this.state.currentPage)?{backgroundColor:'white'}:{backgroundColor:'brown'}
            pointArr.push(
                <View style={[styles.pointStyle,style]} key={i}></View>
            )
        }
        return pointArr;
    }
    onAnimationed(e){
        let offsetX = e.nativeEvent.contentOffset.x;
        let pageIdx = Math.floor(offsetX / screeWidth);
        this.setState({
            currentPage: pageIdx
        })
    }
    render(){
        const navigation = this.props.navigation;
        return (
            <SafeAreaView style={commonStyles.content}>
                <Header navigation={navigation} Title={'关于'} isAtRoot={true} />
                <View style={styles.advcontainer}>
                    {/* <StatusBar barStyle="light-content" backgroundColor="#6a51ae" /> */}
                    {/* 自定义banner部分 */}
                    <ScrollView
                        ref="scrollView"
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={true}
                        onMomentumScrollEnd={(e)=>{
                            this.onAnimationed(e)
                        }}
                    >
                        {this.renderImages()}
                    </ScrollView>
                    <View style={styles.pointBox}>
                        {this.renderPagingPoint()}
                    </View>
                    <Text style={styles.textInfo} onPress={()=> navigation.navigate('Webs')}>点此跳转web页面</Text>
                    {/* swiper部分 */}
                    <Banner></Banner>

                    <Text style={styles.textInfo} onPress={()=> navigation.navigate('LoginStack')}>点此跳转登录页面</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    advcontainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#cccccc',
        position: 'relative'
    },
    imgStyle: {
        width: screeWidth,
        height: 130,
        resizeMode: 'contain'
    },
    pointBox: {
        width: '100%',
        height: 30,
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 130
    },
    pointStyle: {
        width: 10,
        height: 10,
        borderRadius: 50,
        marginLeft: 5,
        marginRight: 5
    },
    textInfo: {
        marginTop: 30,
        fontSize: 24,
        fontWeight: "bold",
        color: '#dd6688'
    }
})