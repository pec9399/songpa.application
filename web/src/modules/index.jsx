import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import UserReducer from './User/reducer'
import MainReducer from './Main/reducer'
import UserSagaListener from './User/sagas';
import MainSagaListener from './Main/sagas';

const rootReducer = combineReducers({
  user: UserReducer,
  main: MainReducer
});

export default rootReducer;

export function* rootSaga() {
  yield all([
    UserSagaListener(),
    MainSagaListener()
  ]);
}