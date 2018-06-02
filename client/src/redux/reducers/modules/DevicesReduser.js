import constants from '../../constants'
import { forEach, keys } from 'lodash';

const initialState = {
    data: [],
    isLoading: false,
    error: null,
};

const DevicesReduser = (state = initialState, action) => {
    switch(action.type) {
        case constants.LOAD_DEVICES:
            return {
              ...state,
              data: [...action.payload],
            };
        default:
            return state
    }
};

export default DevicesReduser;
