import { combineReducers } from 'redux';
import userReducer from './userReducer';

const RootReducer = combineReducers({
    users: userReducer
});


export default RootReducer;
