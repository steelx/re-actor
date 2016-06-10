import {actionTypes} from '../actions/DudeActions';

const DudeReducer = (state = {}, action) => {
    switch (action.type) {

        case actionTypes.WHATS_UP:
            return {
                ...state,
                name: action.payload
            };

        default:
            return state;
    }
};

export default DudeReducer;