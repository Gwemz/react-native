# react-native

两种写法的差异：（第二种代码可正常运行）

```
getlist(){

}

this.getlist()

getlist = () => {

}

this.getlist
```

父子组件传值方式

props接收

https://github.com/justcodejs/RN_Zero2Hero_Tutorial03 (https://www.bilibili.com/video/BV1mg4y187Gm?from=search&seid=7712573974682010475)

## 安装所需要的模块

```
yarn add @react-navigation/native    // react-navigation基本模块

// react-navigation基本模块所需
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

// 安装导航器模块
yarn add @react-navigation/drawer @react-navigation/bottom-tabs @react-navigation/stack

// 安装异步存储模块(将数据保存在设备的存储中)
yarn add @react-native-community/async-storage

// 将数据显示至列表界面中
yarn add react-native-swipe-list-view

// 在应用程序内显示图标
yarn add react-native-vector-icons

// 执行日期格式化
yarn add moment

// 安装iOS需要的本机模块
cd ios && pod install && cd ..
```



