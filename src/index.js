import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './theme/globalStyles';
import App from './App';

const root = document.getElementById("root")

ReactDOM.render(
  <>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </>,
  root
);

