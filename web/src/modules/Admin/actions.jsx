import { createAction, createActions } from "redux-actions";

export const ADD_CARD_REQUEST = 'ADMIN/ADD_CARD_REQUEST';
export const ADD_CARD_SUCCESS = 'ADMIN/ADD_CARD_SUCCESS';
export const ADD_CARD_FAILURE = 'ADMIN/ADD_CARD_FAILURE';

export const addCardAsync = {
    request: createAction(ADD_CARD_REQUEST),
    success: createAction(ADD_CARD_SUCCESS),
    failure: createAction(ADD_CARD_FAILURE),
}