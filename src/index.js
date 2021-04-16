import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'
import dotenv from 'dotenv'

import {ApolloClient, HttpLink, InMemoryCache, ApolloProvider, from} from "@apollo/client"
import { onError } from "@apollo/client/link/error";

dotenv.config()

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => console.log(`GraphQL Error: ${message}`));
  }
  if (networkError) {
    console.log(`Network Error: ${networkError.message}`);
  }
});

const httpLink = new HttpLink({
  uri:  process.env.REACT_APP_API_URL
});


const client = new ApolloClient({
  link: from([
    errorLink,
    httpLink,
  ]),
  cache: new InMemoryCache()
})

const container = document.getElementById('root')

ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, container)