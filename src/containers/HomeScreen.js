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
import axios from 'axios'
// import ApolloWrapper from '../ApolloWrapper'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
// components
import ArticleCard from '../components/ArticleCard'
import Article from './Article'

class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            businesses: []
        }
    }
    componentDidMount () {
        // const URL = `https://api.yelp.com/v3/businesses/search?term=food&location=Taiwan`
        // const token = '3tPiAku8SDQ_Rn347JVcBO9MbV98NcZVxI7M02YhNzOsIx7wV3t6vTT5I7Y4heMXhbS6kG_hCyTQxiwPs_NygZHJLAEje4PvaNXCL8h-ZZJe9K7PTnJzisC4I9QLWnYx'
        // axios.get(URL,{
        //     headers: {
        //         Authorization: `Bearer ${token}`
        //     }
        // })
        // .then(response =>{
        //     this.setState({
        //         businesses: response.data.businesses
        //     })
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
        // axios.post('http://localhost:8888/graphql?query=%7B%0A%20%20%20%20articles%20%7B%0A%20%20%20%20%20%20%20%20articleId%0A%20%20%20%20%7D%20%0A%7D%0A')
        // .then(res => {
        //     console.log(res)
        // })
        console.log(this.props)
    } 
    render() {
        if(this.state.businesses.length === 0) return <View></View>
        return (
            <HomeScrollWrapper>
                {
                    this.state.businesses.map((business,index) => (
                        <ArticleCard 
                            image_url = {business.image_url}
                            name = {business.name}
                            key = {index}
                            {...this.props}
                        />
                    ))
                }
            </HomeScrollWrapper>
        ) 
    }
}
const HomeScrollWrapper = styled.ScrollView`
    background-color: #F0F0F0;
`
const articles = gql`
{
    articles {
        articleId
    } 
}
`
// export default StackNavigator(
//     {
//         Home: {
//             screen: graphql(articles)(HomeScreen),
//             path: '/',
//             navigationOptions: ({navigation}) => ({
//                 title: 'fippo',
//             })
//         },
//         Article: {
//             screen: Article,
//             navigationOptions: ({navigation}) => ({
//                 title: 'Article',
//             })
//         }
//     }
// )
export default graphql(articles)(HomeScreen)