import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './theme/globalStyles';
import { Provider } from 'react-redux'
import App from './App';
import store from './store/store';
const root = document.getElementById("root");

ReactDOM.render(
  <>  
    <React.StrictMode>
      <Provider store={store}>
      <GlobalStyle />
      <App />
      </Provider>
    </React.StrictMode>    
  </>,
  root
);

