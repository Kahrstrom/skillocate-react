import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import dataService from '../middleware/DataService';

export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(dataService)
    ));

    return store;
}
