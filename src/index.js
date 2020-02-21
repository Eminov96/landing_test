import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux'
import { Provider } from 'react-redux'
import { rootReducer} from './reducers/index'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './components/App';
import IndexSaga from "./middleware/saga/indexSaga";
import './reset.css'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,composeWithDevTools(
    applyMiddleware(sagaMiddleware)
));
sagaMiddleware.run(IndexSaga);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();


export default store;