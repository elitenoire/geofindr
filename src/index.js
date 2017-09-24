import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createReduxSaga from 'redux-saga';
import logger from 'redux-logger';

import AppFrame from './containers/AppFrame';
import reducers from './reducers';
import rootSaga from './sagas';
import registerServiceWorker from './registerServiceWorker';


// const createStoreWithMiddleware = applyMiddleware(ReduxPromise, logger)(createStore);
// createStoreWithMiddleware(reducers)
const reduxSaga = createReduxSaga();
const store = createStore(reducers, applyMiddleware(reduxSaga, logger))

reduxSaga.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <AppFrame />
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
