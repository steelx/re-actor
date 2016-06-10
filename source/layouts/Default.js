// Core
import React from 'react';

// Styles
import '../styles/main.scss';


class Default extends React.Component {

    getCurrentRoute() {
        let routes = this.props.routes;
        let currentRoute = 'home';
        let routesArray = [];

        for (let i = 1; i < routes.length; i++) {
            if (routes[i].hasOwnProperty('path')) {
                if (routes[i].path == '*') {
                    currentRoute = 'not-found';
                    break;
                }

                routesArray.push(routes[i].path);
            }
        }

        return routesArray.length ? routesArray.join('-') : currentRoute;
    }

    render() {
        let className = 'default ' + this.getCurrentRoute();

        return (
            <div className={className}>
                {this.props.children}
            </div>
        );
    }
}

export default Default;