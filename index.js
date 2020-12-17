/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import VerticalScrollView from './components/14_VerticalScrollView';
import HorizontalScrollView from './components/15_HorizontalScrollView';
import ViewPagerExample from './components/16_ViewPagerAndroid';
import BasicFlatList from './components/17_BasicFlatList';
import HorizontalFlatList from './components/23_HorizontalFlatList';
import BasicSectionList from './components/24_BasicSectionList';

AppRegistry.registerComponent(appName, () => BasicSectionList);
