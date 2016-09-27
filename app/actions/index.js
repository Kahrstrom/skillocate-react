import * as types from './types';

export function signIn(credentials) {
    return {
        type: types.SIGNIN,
        credentials
    };
}
