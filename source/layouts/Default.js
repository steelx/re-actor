// Core
import React from 'react';

// Styles
import '../styles/main.scss';


class Default extends React.Component {
    render() {
        return (
            <div className="default">
                {this.props.children}
            </div>
        );
    }
}

export default Default;