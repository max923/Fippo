import React from 'react';
import { StyleSheet, Button, ScrollView, Text } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './containers/Home'
import Person from './containers/Person'
import Search from './containers/Search'
import NewArticle from './containers/NewArticle'
import Collection from './containers/Collection'
const AppTabNavigator = TabNavigator(
	{
		HomeTab: {
			screen: Home,
			navigationOptions: {
				tabBarIcon: () => (
					<Ionicons
						name='ios-home'
						size={26}
					/>
				)
			}
		},
		SearchTab: {
			screen: Search,
			navigationOptions: {
				tabBarIcon: () => (
					<Ionicons
						name='ios-search'
						size={26}
					/>
				)
			}
		},
		NewArticleTab: {
			screen: NewArticle,
			navigationOptions: {
				tabBarIcon: () => (
					<Ionicons
						name='ios-camera'
						size={26}
					/>
				)
			}
		},
		CollectionTab: {
			screen: Collection,
			navigationOptions: {
				tabBarIcon: () => (
					<Ionicons
						name='ios-bookmark'
						size={26}
					/>
				)
			}
		},
		PersonTab: {
			screen: Person,
			navigationOptions: {
				tabBarIcon: () => (
					<Ionicons
						name='ios-person'
						size={26}
					/>
				)
			}
		}
	}
)

export default AppTabNavigator