import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components'
import './firebase.config'
import { Provider } from 'react-redux'
import store from './store'

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
  <Provider store={store}>
    <App />
    <GlobalStyles />
  </Provider>,
  document.getElementById('root')
);
