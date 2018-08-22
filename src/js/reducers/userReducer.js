import { FETCH_USERS } from '../types';

const INIT_USERS = {
    users: []
};

export default (state = INIT_USERS, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return { ...state, users: action.users };
        default:
            return state;
    }
};
