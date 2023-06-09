import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client';
import apolloClient from './../apolloClient';


export default function App({ Component, pageProps }) {
  
  return (
  <ApolloProvider client={apolloClient}>
  <Component {...pageProps} />
  </ApolloProvider>
  );
}