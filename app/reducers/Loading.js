const loading = (state = false, action) => {
    switch (action.type) {
        case 'GET_USER_DETAILS':
            return true;
        case 'GET_USER_DETAILS_RECEIVED':
            return false;
        case 'GET_USER_DETAILS_ERROR':
            return false;
        default:
            return state;
    }
};

export default loading;
