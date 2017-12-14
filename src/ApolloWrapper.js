import React, { Component } from "react";
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const GRAPHQL_SERVER = `http://localhost:8888`
function getApolloClient() {
  console.log("I am trying to connect to GRAPHQL_SERVER", { GRAPHQL_SERVER });

  const client = new ApolloClient({
    link: new HttpLink({ uri: `${GRAPHQL_SERVER}/graphql` }),
    cache: new InMemoryCache()
  });
  return client;
}
export default function ApolloWrapper(CMP) {
  return class HomeWrapped extends Component {
    constructor() {
      super();
      this.apolloClient = getApolloClient();
    }

    render() {
      return (
        <ApolloProvider client={this.apolloClient}>
          <CMP {...this.props}/>
        </ApolloProvider>
      );
    }
  };
}
