// Redux
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {routerMiddleware, routerReducer as router} from 'react-router-redux';
import thunk from 'redux-thunk';

// Reducers
import DudeReducer from '../reducers/DudeReducer';

// Initial state
import initialState from './initialState';

const reducers = () => {
    return combineReducers({
        router,
        dude: DudeReducer
    });
};

export default (history) => {
    return createStore(reducers(), initialState, compose(
        applyMiddleware(thunk, routerMiddleware(history)),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
};