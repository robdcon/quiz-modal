import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";

const client = new ApolloClient({
		uri: "https://api.graph.cool/relay/v1/ck1tfsqs05sj90149mzhxtxgv"
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
