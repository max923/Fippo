import React, { Component } from 'react';
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
import axios from 'axios'
import { Colors } from '../constants/Const'
import ApolloWrapper from '../ApolloWrapper'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
// components
import HomeCard from '../components/HomeCard'
import Article from './Article'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            businesses: []
        }
    }
    componentDidMount() {
        const URL = `https://api.yelp.com/v3/businesses/search?term=food&location=Taiwan`
        const token = ''
        axios.get(URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                this.setState({
                    businesses: response.data.businesses
                })
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log(this.props)
    }
    render() {
        if (this.state.businesses.length === 0) return <View></View>
        return (
            <HomeScrollWrapper>
                {
                    this.state.businesses.map((business, index) => (
                        <HomeCard
                            image_url={business.image_url}
                            name={business.name}
                            key={index}
                            {...this.props}
                        />
                    ))
                }
            </HomeScrollWrapper>
        )
    }
}
const HomeScrollWrapper = styled.ScrollView`
    background-color: ${Colors.backGray};
`
const articles = gql`
{
    search(term:"burrito",location:"san francisco") {
      total
      business {
        name
        reviews {
          text
          rating
          time_created
          url
        }
      }
    }
}
`
export default StackNavigator(
    {
        Home: {
            screen: Home,
            path: '/',
            navigationOptions: ({ navigation }) => ({
                title: 'fippo',
            })
        },
        Article: {
            screen: Article,
            navigationOptions: ({ navigation }) => ({
                title: 'Article',
            })
        }
    }
)