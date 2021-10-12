import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "./contexts/theme";
import App from "./App";
import './styles/_main.scss';

ReactDOM.render(
  <ThemeProvider>
    <Provider store={store}>
        <Router>
          <App />
        </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
