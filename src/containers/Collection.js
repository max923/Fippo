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

class Collection  extends Component {
    render(){
        return (
            <Text>Collection</Text>
        )
    }

}
export default StackNavigator(
    {
        Person: {
            screen: Collection,
            path: '/collection',
            navigationOptions: ({navigation}) => ({
                title: '收藏',
            })
        }
    }
)

