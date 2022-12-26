import { call, put, takeLatest } from 'redux-saga/effects';
import {
    addCardApi
} from './api';
import {
    addCardAsync
} from './actions';

function* addCardSaga(action) {
    try {
        const response = yield call(addCardApi,action.payload);
        if (response.result === true) {
            yield put(addCardAsync.success(response));
        } else {
            yield put(addCardAsync.failure(response));
        }
    } catch (error) {
        yield put(addCardAsync.failure({
            result: 'error',
            message: error
        }));
    }
}

export default function* MainSagaListener() {
    yield takeLatest(addCardAsync.request, addCardSaga);
}