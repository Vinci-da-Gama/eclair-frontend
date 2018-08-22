import 'jquery/dist/jquery.min.js';
import 'normalize.css';
import './style/index.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import reducers from './js/reducers';

const rootStore = createStore(reducers, applyMiddleware(thunk));
const RootContainer = document.getElementById('root');

ReactDOM.render(
    <Provider store={rootStore}>
        <App />
    </Provider>,
    RootContainer
);
registerServiceWorker();
