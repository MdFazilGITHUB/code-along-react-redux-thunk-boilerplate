import logger from 'redux-logger'
import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import {thunk} from "redux-thunk"

export const fetchStore = createStore(reducer, applyMiddleware(logger, thunk))

import { compose } from "redux";
import { reducer } from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))