import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createReduxSaga from 'redux-saga';

import AppFrame from './containers/AppFrame';
import reducers from './reducers';
import rootSaga from './sagas';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const reduxSaga = createReduxSaga();
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxSaga)))

reduxSaga.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <AppFrame />
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
