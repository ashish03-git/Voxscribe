import {configureStore} from '@reduxjs/toolkit';
import redux_Reducers from './ReduxSlice';

const store = configureStore({
  reducer: {
    redux_store: redux_Reducers,
  },
});

export default store;
