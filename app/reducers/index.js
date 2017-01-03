import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loading from './Loading';
import userDetails from './UserDetailReducers';


const rootReducer = combineReducers({
    routing: routing,
    form: formReducer,
    loading: loading,
    userDetails: userDetails
});

export default rootReducer;
