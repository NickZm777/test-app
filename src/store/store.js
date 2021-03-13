import { configureStore, combineReducers } from '@reduxjs/toolkit';

import countReducer from './state/reducersToolkit';
// import countReducer2 from './reducers/countReducer2';

const rootReducer = combineReducers({
  htp: countReducer,
  // counter2: countReducer2,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
