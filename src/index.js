import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.jsx';
import * as serviceWorker from './serviceWorker';
import { store } from './store'
import { Provider } from 'react-redux';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
