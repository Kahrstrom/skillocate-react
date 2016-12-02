// function activeUserDetails(state = 1, action){
//     switch(action.type) {
//         case GET_USER_DETAILS:
//             return action.iduser;
//         default:
//             return state;
//     }
// }
function userDetails(state = {
    isFetching: false,
    userDetails: {}
},  action) {
    switch(action.type) {
        case 'REQUEST_USER_DETAILS':
            return Object.assign({}, state, {
                isFetching: true
            });
        case 'RECEIVE_USER_DETAILS':
            return Object.assign({}, state, {
                isFetching: false,
                userDetails: action.data
            });
        default:
            return state;
    }
}

export default userDetails;
