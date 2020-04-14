/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import Root from './src/root'
// import Button from './app/pages/button'
import {name as appName} from './app.json';

// 注册入口文件
// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Root);
// AppRegistry.registerComponent(appName, () => Button);
// alert(AppRegistry.getAppKeys());