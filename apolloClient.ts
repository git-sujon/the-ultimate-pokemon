import { ApolloClient, gql,InMemoryCache } from '@apollo/client';


import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
    uri: 'https://graphql-pokeapi.graphcdn.app/',
  }),
});

export default apolloClient;