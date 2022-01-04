import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components'
import './firebase.config'

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #0e5aab;
    --dark: #08315c;
    --lightgrey: #ddd;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
