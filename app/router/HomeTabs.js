/**
 * Created by wuenchen on 2017/7/6.
 */
import React, {Component} from 'react';
import {
    StyleSheet, Image, PixelRatio
} from 'react-native';
import {TabNavigator} from "react-navigation";
import RecrutimentScreen from "./RecrutimentScreen";
import MeScreen from "./MeScreen";
import ChatScreen from "./ChatScreen";
// 注册tabs
const HomeTabs = TabNavigator({
    home: {
        screen: RecrutimentScreen,
        navigationOptions: {  // 也可以写在组件的static navigationOptions内
            tabBarIcon: ({tintColor, focused}) => (
                focused ?
                    <Image source={require('./../image/main_job_search_select.png')}
                           style={styles.imageSty}/> :
                    <Image source={require('./../image/main_job_search.png')}
                           style={styles.imageSty}/>
            ),
            tabBarLabel: '首页',
        }
    },
    chat: {
        screen: ChatScreen,
        navigationOptions: {
            tabBarIcon: ({tintColor, focused}) => (
                focused ?
                    <Image source={require('./../image/main_chat_select.png')} style={styles.imageSty}/>
                    :
                    <Image source={require('./../image/main_chat.png')} style={styles.imageSty}/>
            ),
            tabBarLabel: '消息',
        }
    },
    Me: {
        screen: MeScreen,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => (
                focused ?
                    <Image source={require('./../image/main_personal_select.png')} style={styles.imageSty}/>
                    :
                    <Image source={require('./../image/main_personal.png')} style={styles.imageSty}/>

            ),
        }
    }
}, {
    animationEnabled: false, // 切换页面时是否有动画效果
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    lazy: false,
    tabBarOptions: {
        activeTintColor: '#333333', // 文字和图片选中颜色
        inactiveTintColor: '#929292', // 文字和图片未选中颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
            backgroundColor: '#fff', // TabBar 背景色
            height:60,
        },
        labelStyle: {
            fontSize:12, // 文字大小
        },
    },
});

export default HomeTabs;
/*export default class HomeScreen extends Component {
 static navigationOptions = {
 header: null,
 };

 render() {
 return Tabs
 }
 }*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    hintText: {
        color: '#929292'
    }, selectText: {
        color: '#333333'
    }, imageSty: {
        resizeMode:'contain',
        width:26, height:  24
    }
});