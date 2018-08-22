import 'jquery/dist/jquery.min.js';
import 'normalize.css';
import './style/index.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './js/components/App';
import rootStore from './js/store/store-config';
import registerServiceWorker from './registerServiceWorker';

const RootContainer = document.getElementById('root');

ReactDOM.render(
    <Provider store={rootStore}>
        <App />
    </Provider>,
    RootContainer
);
registerServiceWorker();
