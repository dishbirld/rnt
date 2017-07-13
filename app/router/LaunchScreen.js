/**
 * Created by wuenchen on 2017/7/6.
 */
import React, {Component} from 'react';
import {Image, View} from "react-native";
import {StateUtils} from "react-navigation";

import { NavigationActions } from 'react-navigation';

export default class LaunchScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        // 请注意Un"m"ount的m是小写

        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

    render() {
        const { navigate } = this.props.navigation;
        let setTimer = () => {
            this.timer = setTimeout(() => {
                console.log('跳转喽');
                const resetActions = NavigationActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({routeName: 'homeTabs'})]
                });
                this.props.navigation.dispatch(resetActions);
            }, 3000);
        }
        return (
            <View style={{width: '100%', height: '100%'}}>
                <Image
                    style={{width: '100%', height: '100%', resizeMode: 'stretch'}}
                    source={require('./../image/loading.png')}
                    onlayout={setTimer()}
                />
            </View>
        );
    }
}