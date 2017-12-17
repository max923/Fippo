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
class Search extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    id: 1,
                    name: 'Max'
                },
                {
                    id: 2,
                    name: 'Max'
                },
                {
                    id: 3,
                    name: 'Max'
                },
                {
                    id: 4,
                    name: 'Max'
                },
                {
                    id: 5,
                    name: 'Max'
                }
            ],
        };
    }
    _keyExtractor = (item, index) => item.id;

    _renderRecommendWriter = ({ item }) => (
        <ItemWrapepr>
            <ItemBlock>
                <Text>{item.name}</Text>
            </ItemBlock>

        </ItemWrapepr>
    )
    _renderRecommendArticle({item}) {
        return (
            <ItemWrapepr>
                <ItemBlock>

                    <Text>{item.name}</Text>
                </ItemBlock>
            </ItemWrapepr>
        )
    }
    render() {
        return (
            <SearchWrapper>
                <SearchBar />
                {/* Recommend Writer */}
                <BlockWrapper>
                    <Title>推薦寫手</Title>
                    <ScrollListWrapper
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={this.state.data}
                        renderItem={this._renderRecommendWriter}
                        keyExtractor={this._keyExtractor}
                    />
                </BlockWrapper>
                {/* Recommend Acticle */}
                <BlockWrapper>
                    <Title>推薦文章</Title>
                    <ScrollListWrapper
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={this.state.data}
                        renderItem={this._renderRecommendArticle}
                        keyExtractor={this._keyExtractor}
                    />
                </BlockWrapper>
            </SearchWrapper>

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
            screen: Search,
            path: '/search',
            navigationOptions: ({ navigation }) => ({
                title: '搜尋',
            })
        }
    }
)