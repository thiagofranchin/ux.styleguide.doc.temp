import { combineReducers } from 'redux';
import Reducers from './reducers';

const reducers = combineReducers({
  reports: Reducers
});

export default reducers;
