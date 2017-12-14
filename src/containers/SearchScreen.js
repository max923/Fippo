import React,{Component} from 'react';
import { 
    StyleSheet, 
    ScrollView, 
    Text, 
    Button, 
    View, 
    Image 
} from 'react-native';
import styled from 'styled-components/native';
import { StackNavigator } from 'react-navigation';

class SearchScreen extends Component {
    render() {
        return (
            <Text>dsadsadas</Text>
        )
    }
}
export default StackNavigator(
    {
        Person: {
            screen: SearchScreen,
            path: '/search',
            navigationOptions: ({navigation}) => ({
                title: '搜尋',
            })
        }
    }
)