import { combineReducers } from 'redux';
import store from './state/reducers';

export default () =>
  combineReducers({
    store: store,
  });
