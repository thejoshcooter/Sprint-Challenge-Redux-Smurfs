
import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ADD = 'ADD';
export const UPDATE = 'UPDATE';
export const ERROR = 'ERROR';
export const UNLOAD = 'UNLOAD';
const server = 'http://localhost:3333/smurfs'

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCHING });
    axios
        .get(server)
        .then(res => {
            dispatch({ type: FETCHED, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err });
        });
};

export const addSmurf = (newSmurf) => dispatch => {
    axios
        .post(server, newSmurf)
        .then(res => {
            dispatch({ type: ADD, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: ERROR, payload: err });
        });
};

