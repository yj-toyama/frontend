import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000', // BFF (GraphQLサーバー)のURLを指定
  cache: new InMemoryCache(),
});

export default apolloClient;
