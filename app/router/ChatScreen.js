/**
 * Created by wuenchen on 2017/7/5.
 */
import React, {Component} from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';
export default  class ChatScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: `Chat with`,
        headerStyle: {
            backgroundColor: '#0f0',
        },
        headerTitleStyle: {
            alignItems:'center'
        }
    });

    render() {
        const {params} = this.props.navigation.state;
        return <Text style={styles.welcome}>dsadsa</Text>
    }
}
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
});
