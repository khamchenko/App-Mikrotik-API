import { combineReducers } from 'redux';
import devices from './modules/DevicesReduser';
import Interface from './modules/InterfaceReduser';

const rootReducer = combineReducers({
    devices,
    Interface,
});

export default rootReducer;
