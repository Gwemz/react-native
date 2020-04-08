// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One(daguo)</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;

// import React, { Component } from 'react';
// import { Text, View , Image , TextInput , Button , Alert , StyleSheet , TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';

// class Greeting extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center', marginTop: 20}}>
//         <Text style={{fontSize: 22}}>Hello {this.props.name}!</Text>
//       </View>
//     );
//   }
// }

// class MoiveImage extends Component{
//   state = {showBox: true}
//   // componentDidMount(){
//   //   setInterval(()=>{
//   //     this.setState({
//   //       showBox: !this.state.showBox
//   //     })
//   //   },1000)
//   // }
//   render(){
//     // if(!this.state.showBox){
//     //   return null;
//     // }
//     return (
//       <Image source={this.props.pic} style={{ width:400,height: 300,marginTop: 30,alignItems: 'center' }}/>
//     );
//   }
// };

// // 测试内容
// export default class HelloWorldApp extends Component {
//   render() {
//     let pic = {
//       uri: 'http://p3.music.126.net/vie1xj2bn38Aj70vSPG_4w==/109951162981221419.jpg'
//     }
//     return (
//       <View style={{alignItems: "center",paddingTop: 50}}>
//         <Greeting name="daguo"/>
//         <Greeting name="wdcorner"/>
//         <MoiveImage pic={pic}/>
//         <Text style={{fontSize: 24,marginTop: 25,color: '#ff6600',fontWeight: "bold"}}>This is a part of wenzi!</Text>
//         <TextInput placeholder="this is placeholder" style={{width:380,height: 40,borderColor: '#ff6600',borderWidth: 1,borderRadius: 5,marginTop: 20, marginBottom: 30 ,paddingLeft: 20}}/>
//         <Button title="按钮" onPress={()=>{
//           console.log('text...')
//           Alert.alert('你点击了按钮！');
//         }}/>
//       </View>
//     );
//   }
// };

const MOCKED_MOVIES_DATA = [
  {
    title: "标题",
    year: "2015",
    posters: { thumbnail: "http://p3.music.126.net/vie1xj2bn38Aj70vSPG_4w==/109951162981221419.jpg" }
  }
];

// const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';
const REQUEST_URL = 'http://m.hx2car.com/wap/getMoreCar.json?pageSize=30';

import React, { Component } from "react";
import { Image, StyleSheet, Text, View , FlatList , TouchableOpacity , Platform} from "react-native";

export default class MovieList extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [],
      loaded: false
    }
    this.fetchData = this.fetchData.bind(this);
    console.log(Platform.OS);
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
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
    if(!this.state.loaded){
      return this.renderLoadingView()
    }

    return (
      <FlatList data={this.state.data} renderItem={this.renderMovie} style={styles.list} keyExtractor={item => item.id} ListHeaderComponent={this.renderHeader.bind(this)} ListFooterComponent={this.renderFooter.bind(this)} onEndReached={this.scrollToEnd.bind(this)}/>
    )
  }

  renderLoadingView(){
    return (
      <View style={styles.container}>
        <Text>正在加载车辆数据...</Text>
      </View>
    )
  }

  renderFooter(){
    return (
      <Text>page footer</Text>
    )
  }

  renderHeader(){
    return (
      <Text>page Header</Text>
    )
  }

  scrollToEnd(){
    console.log('滚动到页面底部');
  }

  itemPress(){
    console.log('item点击');
  }

  renderMovie({item}){
    return (
      <TouchableOpacity onPress={() => {alert('点击了View')}}>
        <View style={styles.container}>
          <Image style={styles.thumbnail} source={{uri: item.firstphoto}} />
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
    backgroundColor: "#ffffff",
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