import 'jquery/dist/jquery.min.js';
import 'normalize.css';
import './style/index.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
// import thunk from 'redux-thunk';
// import { createStore, applyMiddleware } from 'redux';
// import reducers from './js/reducers';
import rootStore from './js/store/store-config';
import registerServiceWorker from './registerServiceWorker';

// const rootStore = createStore(reducers, applyMiddleware(thunk));
const RootContainer = document.getElementById('root');

ReactDOM.render(
    <Provider store={rootStore}>
        <App />
    </Provider>,
    RootContainer
);
registerServiceWorker();
