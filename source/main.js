// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Router
import {Router, browserHistory} from 'react-router';

// Routes
import Routes from './routes';

// Root element
const ROOT_ELEMENT = document.getElementById('root');


let render = () => {
    const App = (
        <Router history={browserHistory} children={Routes} />
    );

    ReactDOM.render(App, ROOT_ELEMENT);
};

render();