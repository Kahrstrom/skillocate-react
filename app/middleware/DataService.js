import request from 'superagent';

const dataService = () => next => action => {
    next(action);
    switch (action.type) {
        case 'GET_USER_DETAILS':
            request
                .get('https://skillocate-backend.herokuapp.com/api/userdetailtest')
                .end((err, res) => {
                    if(err) {
                        return next({
                            type: 'GET_USER_DETAILS_ERROR',
                            err
                        });
                    }
                    const data = JSON.parse(res.text).data;
                    return next({
                        type: 'RECEIVE_USER_DETAILS',
                        data
                    });
                });
            break;
        default:
            break;
    }
};

export default dataService;
