import React, { Component } from "react";
import { Text, View , StyleSheet, TouchableOpacity,Button,TextInput,TouchableHighlight, AppState,AsyncStorage,PixelRatio,Animated} from "react-native";

export default class LoginPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            currentState: AppState.currentState
        }
    }
    componentDidMount(){            //组件渲染完成之后调用
        AppState.addEventListener('change',this.handleAppStateChange)
        // AsyncStorage.getAllKeys((error,result)=>{
        //     console.log(result);
        // })
        // navigator.geolocation.getCurrentPosition((position)=>{
        //     console.log(position);
        // })
        // console.log(navigator.geolocation);
        // NetInfo.fetch().done((status)=>{
        //     console.log(status);
        // })
        console.log('test');
    }
    componentWillUnmount(){     //组件销毁时调用
        AppState.removeEventListener('change',this.handleAppStateChange)
    }
    handleAppStateChange = (nextAppState)=>{
        if(this.state.AppState.match(/inactive|background/) && nextAppState === 'active'){
            console.log('App has come to the foreground!');
        }
        this.setState({
            AppState: nextAppState
        })
    }
    changeText(text){
        console.log(text);
    }
    // 保存数据
    saveData(key,value,callback){
        AsyncStorage.setItem(key,value,(error,result)=>{
            if(error){
                alert('存储失败！');
            }else{
                // this.setState({
                //     data: value
                // })
                alert('数据存储成功!');
            }
        })
    }
    // 更新数据
    updateDataByKeys(key,isAdd){
        AsyncStorage.getItem(this.favoriteKey,(error,result) => {
            if(!error){
                let favoriteKeys = [];
                if(result){
                    favoriteKeys = JSON.parse(result)
                }
                let idx = favoriteKeys.indexOf(key);
                if(isAdd){          //添加新内容
                    if(idx === -1) favoriteKeys.push(key)
                }else{              //删除元素
                    if(idx !== -1) favoriteKeys.splice(idx,1)
                }
                AsyncStorage.setItem(this.favoriteKey,JSON.stringify(favoriteKeys))
            }
        })
    }
    // 查询数据
    loadData(key){
        let temp = this;
        AsyncStorage.getItem(key,(error,result)=>{
            if(!error){
                console.log('查询结果为：'+ result);
                temp.setState({
                    data: result === null ?'数据已删除':result
                })
            }else{
                console.log(error);
            }
        })
    }
    // 删除数据
    delData(key){
        AsyncStorage.removeItem(key,(error,result) => {
            if(!error){
                alert('数据已删除');
            }
        })
    }
    render(){
        // const navigation = this.props.navigation;
        return (
            <View style={styles.loginPart}>
                <TextInput style={styles.inputBox} placeholder="请输入QQ号/手机号/邮箱" keyboardType="name-phone-pad" maxLength={5} onChangeText={this.changeText.bind(this)}/>
                <View style={styles.loginBtn}>
                    <Text style={styles.loginText}>登 录</Text>
                </View>
                <TouchableHighlight activeOpacity="0.5" underlayColor="red">
                    <Text style={styles.hightext}>please click me!</Text>
                </TouchableHighlight>
                <Text style={styles.stateText}>当前应用的状态是：{this.state.currentState}</Text>
                <Button title="存储数据" onPress={()=>{
                    this.saveData('name','daguo',(res)=>{
                        console.log(res);
                    })
                }}/>
                <Button title="查询数据" onPress={()=>{
                    this.loadData('name');
                }}/>
                <Button title="删除数据" onPress={()=>{
                    this.delData('name')
                }}/>
                <Text style={styles.stateText}>当前屏幕像素密度比例为：{PixelRatio.get()}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginPart: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 50
    },
    loginBtn: {
        width: 400,
        height: 50,
        backgroundColor: "#d3d499",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    loginText: {
        fontSize: 18,
        color: "#ffffff"
    },
    inputBox: {
        width: 400,
        height: 50,
        backgroundColor: '#ffffff',
        marginBottom: 25,
        borderBottomWidth: 1,
        borderColor: '#e1e1e1',
        paddingLeft: 15
    },
    hightext: {
        fontSize: 24,
        color: '#434343',
        marginTop: 25
    },
    stateText: {
        marginTop: 25,
        fontSize: 28,
        color: '#ff4477'
    },
    currBtn:{
        marginBottom: 20
    }
})