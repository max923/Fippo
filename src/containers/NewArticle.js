import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    SectionList,
    FlatList,
    ListView,
    Text,
    Button,
    View,
    Image,
    ListItem
} from 'react-native';
import styled from 'styled-components/native';
import { StackNavigator,DrawerNavigator } from 'react-navigation';
// components
import SearchBar from '../components/SearchBar'
import Camera from '../components/Camera'
import ImagePicker from '../components/ImagePicker'
class NewArticle extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <ImagePicker/>
        )
    }
}

const SearchWrapper = styled.ScrollView`
    padding: 0 15px;
`
const BlockWrapper = styled.View`
`
const Title = styled.Text`
    margin: 15px 0;
    font-size: 16px;
`
const ScrollListWrapper = styled.FlatList`
    display: flex;
    flexDirection: row;
`
const ItemWrapepr = styled.View`
    flex:1;
    width: 100px;
    height: 140px;
    background: #FFF;
    border-radius: 8px;
    margin-right: 5px;
    
`
const ItemBlock = styled.View`
    padding: 10px;
`
export default StackNavigator(
    {
        Person: {
            screen: NewArticle,
            path: '/newArticle',
            navigationOptions: ({ navigation }) => ({
                title: '新增文章',
            })
        }
    },
)