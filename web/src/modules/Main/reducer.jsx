import { handleActions } from 'redux-actions';
import {
    getAppsAsync
} from './actions'

const initialState = {
    result: false,
    applications: [],
    message: ''
};

const MainReducer = handleActions({
    [getAppsAsync.request]: (state, action) => ({
        ...state
    }),
    [getAppsAsync.success]: (state, action) => ({
        ...state,
        result: true,
        applications: action.payload.data
    }),
    [getAppsAsync.failure]: (state, action) => ({
        ...state,
        result: false,
        message: action.payload.message
    })
}, initialState);

export default MainReducer;