import { FETCH_USERS } from '../types';

const INIT_USERS = {};

export default (state = INIT_USERS, action) => {
    switch (action.type) {
        case FETCH_USERS:
            console.log('8 -- ', action.users);
            return { ...state, ...action.users };
        default:
            return state;
    }
};
