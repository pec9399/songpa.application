import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import UserReducer from './User/reducer'
import UserSagaListener from './User/sagas';

const rootReducer = combineReducers({
  user: UserReducer,
});

export default rootReducer;

export function* rootSaga() {
  yield all([
    UserSagaListener(),
  ]);
}