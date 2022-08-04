import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import './index.css';
import App from './pages/App';
//import reducer, {rootSaga} from '@modules';
import createSagaMiddleware from 'redux-saga';
import {createBrowserHistory} from 'history';
import {BrowserRouter} from 'react-router-dom';

const customHistory = createBrowserHistory();
/*
const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory,
  },
});

export const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware,
        ),
    ),
);

sagaMiddleware.run(rootSaga);
*/

/*
ReactDOM.render(
    <Router history={customHistory}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
    document.getElementById('root'),
);
*/

ReactDOM.render(
  <BrowserRouter history={customHistory}>
      <App />
  </BrowserRouter>,
  document.getElementById('root'),
);