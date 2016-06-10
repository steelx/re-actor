export const actionTypes = {
    WHATS_UP: 'WHATS_UP'
};

const whatsUpDude = (payload) => {
    return {
        type: actionTypes.WHATS_UP,
        payload
    };
};

export const sayWhatsUpDude = (text) => {
    return (dispatch) => dispatch(whatsUpDude(text));
};