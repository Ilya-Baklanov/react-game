import '@/assets/stylesheets/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
// import rootReducer from './redux/rootReducer';

const store = createStore(
  // rootReducer,
  composeWithDevTools(
    applyMiddleware(),
  ),
);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <Root />,
  document.getElementById('app')
);
