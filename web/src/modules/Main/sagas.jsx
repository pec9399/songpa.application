import { call, put, takeLatest } from 'redux-saga/effects';
import {
    getAppsApi
} from './api';
import {
    getAppsAsync
} from './actions';

function* getAppsSaga(action) {
    try {
        const response = yield call(getAppsApi);
        if (response.result === true) {
            yield put(getAppsAsync.success(response));
        } else {
            yield put(getAppsAsync.failure(response));
        }
    } catch (error) {
        yield put(getAppsAsync.failure({
            result: 'error',
            message: error
        }));
    }
}

export default function* MainSagaListener() {
    yield takeLatest(getAppsAsync.request, getAppsSaga);
}