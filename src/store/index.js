// configureStore like createStore() creates a store and makes merging multiple reducers into 1 reducer easier
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter-slice';
import authReducer from './auth-slice';
// We can set a single reducer or a map of reducers
// Behind the scenes configure store will merge all the reducers into one big reducer
// Now, very important, when you work with multiple slices, you still only have one Redux store,
// so you still only call configureStore once. This does not change. And this store only has one root reducer here
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
