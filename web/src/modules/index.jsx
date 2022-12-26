import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import UserReducer from './User/reducer'
import MainReducer from './Main/reducer'
import AdminReducer from './Admin/reducer'
import UserSagaListener from './User/sagas';
import MainSagaListener from './Main/sagas';
import AdminSagaListener from './Admin/sagas';

const rootReducer = combineReducers({
  user: UserReducer,
  main: MainReducer,
  admin: AdminReducer,
});

export default rootReducer;

export function* rootSaga() {
  yield all([
    UserSagaListener(),
    MainSagaListener(),
    AdminSagaListener(),
  ]);
}