import { combineReducers } from 'redux';
import devices from './modules/DevicesReduser';
import Interface from './modules/InterfaceReduser';
import trafficInterface from './modules/TrafficReduser';

const rootReducer = combineReducers({
    devices,
    Interface,
    trafficInterface
});

export default rootReducer;
