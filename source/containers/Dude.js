// Core
import React from 'react';

// Redux
import {connect} from 'react-redux';

// Actions
import {sayWhatsUpDude} from '../actions/DudeActions';

// Components
import DudeName from '../components/DudeName';


class Dude extends React.Component {

    handleChange(event) {
        this.props.sayWhat(event.target.value);

        event.target.style.width = ((event.target.value.length + 1) * 8) + 'px';
    }

    render() {
        return (
            <DudeName dudeName={this.props.dude.name} handleChange={this.handleChange.bind(this)} />
        );
    }
}

function mapStateToProps(state) {
    return {
        dude: state.dude
    };
}

function mapDispatchToProps(dispatch) {
    let sayWhat = (text) => {
        dispatch(sayWhatsUpDude(text));
    };
    return {sayWhat};
}

export default connect(mapStateToProps, mapDispatchToProps)(Dude);