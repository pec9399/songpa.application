import {createAction,createActions} from "redux-actions";

export const LOGIN_USER_REQUEST = 'USER/LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'USER/LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL ='USER/LOGIN_USER_FAIL';

export const loginAsync = {
    request: createAction(LOGIN_USER_REQUEST),
    success: createAction(LOGIN_USER_SUCCESS),
    failure: createAction(LOGIN_USER_FAIL),
}

export const LOGOUT_USER_REQUEST = 'USER/LOGOUT_USER_REQUEST';
export const LOGOUT_USER_SUCCESS = 'USER/LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_FAIL ='USER/LOGOUT_USER_FAIL';

export const logoutAsync = {
    request: createAction(LOGOUT_USER_REQUEST),
    success: createAction(LOGOUT_USER_SUCCESS),
    failure: createAction(LOGOUT_USER_FAIL),
}

export const CHECK_SESSION_REQUEST = 'USER/CHECK_SESSION_REQUEST';
export const CHECK_SESSION_SUCCESS = 'USER/CHECK_SESSION_SUCCESS';
export const CHECK_SESSION_FAILURE ='USER/CHECK_SESSION_FAILURE';

export const checkSessionAsync = {
    request: createAction(CHECK_SESSION_REQUEST),
    success: createAction(CHECK_SESSION_SUCCESS),
    failure: createAction(CHECK_SESSION_FAILURE),
}