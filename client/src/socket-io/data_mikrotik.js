import socket from './utils' ;

import { ListDevices, ListInterface, TrafficInterface } from '../redux/actions/dataMikrotik';

export const getDevices = () => dispatch => {
    socket.on('get_devices', (devices) => {
        dispatch(ListDevices(devices));
    });
};

export const getInterface = () => dispatch => {
    socket.on('get_Interface', (Interface) => {
        dispatch(ListInterface(Interface));
    });
};
