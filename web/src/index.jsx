import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import './index.css';
import App from './pages/App';
import reducer, {rootSaga} from './modules';
import createSagaMiddleware from 'redux-saga';
import {createBrowserHistory} from 'history';
import {BrowserRouter} from 'react-router-dom';


const customHistory = createBrowserHistory();

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

const rootNode = document.getElementById('root')

ReactDOM.createRoot(rootNode).render(
    <BrowserRouter history={customHistory}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
);

