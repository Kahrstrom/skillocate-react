const userDetails = (state = {}, action) => {
    switch (action.type) {
        case 'GET_TODO_DATA_RECEIVED':
            return action.data;
        default:
            return state;
	}
}