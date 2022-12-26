import { createAction, createActions } from "redux-actions";

export const GET_APPLICATIONS_REQUEST = 'MAIN/GET_APPLICATIONS_REQUEST';
export const GET_APPLICATIONS_SUCCESS = 'MAIN/GET_APPLICATIONS_SUCCESS';
export const GET_APPLICATIONS_FAILURE = 'MAIN/GET_APPLICATIONS_FAILURE';

export const getAppsAsync = {
    request: createAction(GET_APPLICATIONS_REQUEST),
    success: createAction(GET_APPLICATIONS_SUCCESS),
    failure: createAction(GET_APPLICATIONS_FAILURE),
}
