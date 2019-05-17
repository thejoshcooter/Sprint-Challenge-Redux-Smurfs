

// import action types
import * as actionTypes from '../actions/index';

const initialState = {
	fetching: false,
	editing: false,
    smurfs: [],
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCHING:
            return { ...state, fetching: true };
        case actionTypes.FETCHED:
            return {
                ...state,
                fetching: false,
                smurfs: [...state.smurfs, ...action.payload]
            };
        case actionTypes.ADD:
            return {
                ...state,
                smurfs: [ ...action.payload]
			};
        case actionTypes.ERROR:
            return { 
                ...state, 
				fetching: false,
				editing: false,
                error: action.payload 
            };
        default:
            return state;
    }
};