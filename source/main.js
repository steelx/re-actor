// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Router
import {Router, browserHistory} from 'react-router';

// Redux
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';

// Routes
import Routes from './routes';

// Store
import createStore from './store/createStore';

// Root element
const ROOT_ELEMENT = document.getElementById('root');

const store = createStore(browserHistory);

const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state) => state.router
});


let render = () => {
    const App = (
        <Provider store={store}>
            <Router history={history} children={Routes} />
        </Provider>
    );

    ReactDOM.render(App, ROOT_ELEMENT);
};

render();