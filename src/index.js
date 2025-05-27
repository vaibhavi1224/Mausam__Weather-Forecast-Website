import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from "./Header.js"


ReactDOM.render(
  <Header />,
  document.getElementById("header")
);
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
