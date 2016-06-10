// Core
import React from 'react';

// Router
import {IndexLink} from 'react-router';


class NotFound extends React.Component {
    render() {
        return (
            <h1>Nope, <IndexLink to="/">go back</IndexLink>.</h1>
        );
    }
}

export default NotFound;