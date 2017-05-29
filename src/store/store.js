import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers/reducers';
import promise from 'redux-promise';

const enhancer = applyMiddleware(promise);
const store = createStore(reducers, undefined, enhancer);

export default store;

