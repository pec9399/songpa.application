import {handleActions} from 'redux-actions';
import {
    loginAsync,
    logoutAsync,
    checkSessionAsync,
} from './actions'

const initialState = {
    login: false,
    session: {
      uid: '',
      name: '',
      email: '',
      nickname: '',
    },
    message: ''
};

const UserReducer = handleActions({
    [loginAsync.request]: (state, action) => (
        initialState
    ),
    [loginAsync.success]: (state, action) => ({
        ...state,
        login: true,
        session: action.payload.session,
        message: action.payload.message
    }),
    [loginAsync.failure]: (state, action) => ({
        ...state,
        login: false,
        message: action.payload.message,
    }),
    [checkSessionAsync.request]: (state, action) => ({
        ...state,
    }),
    [checkSessionAsync.success]: (state, action) => ({
        ...state,
        login: true,
        session: action.payload.user
    }),
    [checkSessionAsync.failure]: (state, action) => ({
        ...state,
        login: false,
        session: undefined
    }),
    [logoutAsync.request]: (state, action) => ({
        ...state,
    }),
    [logoutAsync.success]: (state, action) => ({
        ...state,
        login: false,
        session: undefined,
        message: 'logout',
    }),
    [logoutAsync.failure]: (state, action) => ({
        ...state,
        message: action.payload.message,
    })
},initialState);

export default UserReducer;