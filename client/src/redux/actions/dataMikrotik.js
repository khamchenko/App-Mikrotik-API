import constants from '../constants';

export const ListDevices = (devices) => dispatch => {
    dispatch({
        type: constants.LOAD_DEVICES,
        payload: devices,
    })
};

export const ListInterface = (Interface) => dispatch => {
    dispatch({
        type: constants.LOAD_INTERFACE,
        payload: Interface,
    })
};

export const TrafficInterface = (Interface) => dispatch => {
    dispatch({
        type: constants.LOAD_TRAFFIC,
        payload: Interface,
    })
};
