import axios from 'axios';

import { FETCH_USERS } from '../types';

const baseUrl = 'http://localhost:3004';

const loadUsers = (users) => {
    return {
        type: FETCH_USERS,
        users
    }
};

export const getUsers = () => {
    return (dispatch) => {
        return axios.get(`${baseUrl}/users`)
        .then((resp) => {
            if (resp) {
                dispatch(loadUsers(resp.data));
            }
        })
        .catch((err) => {
            console.log('21 -- ', err);
        });
    };
};
