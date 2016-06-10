// Core
import React from 'react';


class DudeName extends React.Component {
    render() {
        return (
            <p>
                <span>What's up, </span>
                <input
                    type="text"
                    defaultValue={this.props.dudeName}
                    onChange={this.props.handleChange}
                />
            </p>  
        );
    }
}

export default DudeName;