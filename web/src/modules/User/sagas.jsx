import {call, put, takeLatest} from 'redux-saga/effects';
import {
    loginApi,
    logoutApi,
    checkSessionApi,
} from './api';
import {
    loginAsync,
    logoutAsync,
    checkSessionAsync,
} from './actions';

function* loginUserSaga(action) {
  try {
    const param = action.payload;
    const response = yield call(loginApi, param);
    if (response.result === true) {
      yield put(loginAsync.success(response));
    } else {
      yield put(loginAsync.failure(response));
    }
  } catch (error) {
    yield put(loginAsync.failure({
        result: 'error',
        message: error
    }));
  }
}

function* logoutUserSaga(action) {
  try {
    const response = yield call(logoutApi);
    if (response.result === true) {
      yield put(logoutAsync.success(response));
    } else {
      yield put(logoutAsync.failure(response));
    }
  } catch (error) {
    yield put(logoutAsync.failure({
        result: 'error',
        message: error
    }));
  }
}

function* checkSessionSaga(action){
  try {
    const param = action.payload;
    const response = yield call(checkSessionApi);
    if (response.result === true) {
      yield put(checkSessionAsync.success(response));
    } else {
      yield put(checkSessionAsync.failure(response));
    }
  } catch (error) {
    yield put(checkSessionAsync.failure({
        result: 'error',
        message: error
    }));
  }
}

export default function* UserSagaListener() {
  yield takeLatest(loginAsync.request, loginUserSaga);
  yield takeLatest(logoutAsync.request, logoutUserSaga);
  yield takeLatest(checkSessionAsync.request, checkSessionSaga);
}

