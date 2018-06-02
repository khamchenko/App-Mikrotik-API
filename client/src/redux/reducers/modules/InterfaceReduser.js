import constants from '../../constants'
import { forEach, keys } from 'lodash';

const initialState = {
    data: [],
    isLoading: false,
    error: null,
};

const InterfaceReduser = (state = initialState, action) => {
    switch(action.type) {
        case constants.LOAD_INTERFACE:
            return {
              ...state,
              data: [...action.payload],
            };
        default:
            return state
    }
};

export default InterfaceReduser;
