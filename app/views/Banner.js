import 'react-native-gesture-handler';
import React, { Component } from "react";
import { Text, View , StyleSheet , Image} from "react-native";
import Swiper from 'react-native-swiper';
let imgurls = [
    'http://www.hx2car.com/upload/daily/normal/MobileIndexPage/MobileIndexTop/2020/20200327100115.jpg',
    'http://www.hx2car.com/upload/daily/normal/MobileIndexPage/MobileIndexTop/2020/20200407095250.png',
    'http://www.hx2car.com/upload/daily/normal/MobileIndexPage/MobileIndexTop/2020/20200327165930.jpg',
    'http://www.hx2car.com/upload/daily/normal/MobileIndexPage/MobileIndexTop/2019/20191119190919.jpg'
]
export default class Banner extends Component{
    renderItem(){
        let imgDoms = [];
        for(let i in imgurls){
            imgDoms.push(
                <View style={styles.slide}>
                    <Image style={styles.imgSize} source={{uri:imgurls[i]}} />
                </View>
            )
        }
        return imgDoms;
    }
    render(){
        return (
            <View style={styles.swiperBox}>
                <Swiper>
                    {this.renderItem()}
                </Swiper>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    swiperBox: {
        width: '100%',
        height: 200
    },
    text: {
        fontSize: 18,
        color: '#ffffff'
    },
    slide: {
        width: '100%',
        height: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    }, 
    imgSize: {
        width: '100%',
        height: 200,
        backfaceVisibility: "hidden",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#ffffff",
        resizeMode: 'contain',
    }
})