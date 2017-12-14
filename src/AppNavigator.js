import React from 'react';
import { StyleSheet, Button, ScrollView, Text } from 'react-native';
import { StackNavigator,TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './containers/HomeScreen'
import PersonScreen from './containers/PersonScreen'
import SearchScreen from './containers/SearchScreen'
const AppTabNavigator = TabNavigator(
	{
		HomeTab: {
			screen: HomeScreen,
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
			screen: SearchScreen,
			navigationOptions: {
				tabBarIcon: () => (
					<Ionicons
						name='ios-search'
						size={26}
					/>
				)
			}
		},
		PersonTab: {
			screen: PersonScreen,
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