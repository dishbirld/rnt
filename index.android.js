/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';
import setup from "./app/setup";


/*const ChatScreen = require('./app/router/ChatScreen');
class test extends Component {
    render() {
        return (
            // 尝试把`alignItems`改为`flex-start`看看
            // 尝试把`justifyContent`改为`flex-end`看看
            // 尝试把`flexDirection`改为`row`看看
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
            }}>
                <View style={{height: 50, backgroundColor: 'powderblue'}}/>
                <View style={{height: 50, backgroundColor: 'skyblue'}}/>
                <View style={{height: 50, backgroundColor: 'steelblue'}}/>
            </View>
        );
    }
}
class HomeScreen extends Component {
    static navigationOptions = {
        title: 'home',
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>home screen</Text>
                <Button
                    title="下一步"
                    onPress={() => navigate('Chat',{user:'wu'})}
                />
            </View>
        );

    }
}
const homeNavigation = StackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Chat: {
        screen: ChatScreen,
    },
});
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
});*/

AppRegistry.registerComponent('test', () => setup());
