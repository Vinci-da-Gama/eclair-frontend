import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import RootReducer from '../reducers';

const rootStore = createStore(
    RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

export default rootStore;
