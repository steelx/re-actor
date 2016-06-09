import React from 'react';

import img from '../images/img-profile.png';

class Default extends React.Component {
    render() {
        return (
            <div className="default">
                <img src={img} />
            </div>
        );
    }
}

export default Default;