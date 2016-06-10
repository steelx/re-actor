// Core
import React from 'react';

// Containers
import Dude from '../containers/Dude';

// Assets
import img from '../images/img-profile.png';


class Home extends React.Component {
    render() {
        return (
            <div className="center">
                <img src={img} />
                <Dude />
            </div>
        );
    }
}

export default Home;