import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

// Now for dispatching actions createSlice has got us covered.
// It automatically creates unique action identifiers for our different reducers.
// To get hold of these action identifiers, we can use our counterSlice and access `.actions`.

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// Actions are used for dispatching actions to our reducer
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
