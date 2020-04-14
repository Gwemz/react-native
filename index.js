/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Root from './src/root'
import {name as appName} from './app.json';

// 注册入口文件
AppRegistry.registerComponent(appName, () => Root);