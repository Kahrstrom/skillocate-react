import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const signIn = (state = '', action) => {
    switch (action.type) {
        case types.SIGNIN:
            return action.credentials;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    signIn,
    routing
});

export default rootReducer;
