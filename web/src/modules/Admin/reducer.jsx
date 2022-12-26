import { handleActions } from 'redux-actions';
import {
    addCardAsync
} from './actions'

const initialState = {
    result: false,
    message: ''
};

const AdminReducer = handleActions({
    [addCardAsync.request]: (state, action) => ({
        ...state
    }),
    [addCardAsync.success]: (state, action) => ({
        ...state,
        result: true,
        message: 'addCardSuccess'
    }),
    [addCardAsync.failure]: (state, action) => ({
        ...state,
        result: false,
        message: action.payload.message
    })
}, initialState);

export default AdminReducer;