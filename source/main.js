// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Default from './layouts/Default';

// Styles
import './styles/main.scss';


const ROOT_ELEMENT = document.getElementById('root');

let render = () => {
    const App = (
        <Default />
    );

    ReactDOM.render(App, ROOT_ELEMENT);
};

render();