import AppNavigator from './src/AppNavigator'
import React from 'react';
import { AppRegistry,View,Text } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const GRAPHQL_SERVER = `http://172.20.10.2:8888/graphql`
const client = new ApolloClient({
    link: new HttpLink({ uri: `${GRAPHQL_SERVER}/graphql` }),
    cache: new InMemoryCache()
});
const App = () => (
      <ApolloProvider client={client}>
            <AppNavigator/>
      </ApolloProvider>
)
export default AppNavigator
