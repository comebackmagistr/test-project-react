import { createSlice } from '@reduxjs/toolkit';

export const currentSlice = createSlice({
  name: 'currentElement',
  initialState: [],
  reducers: {
    setCurrent: (state, action) => action.payload,
  },
});

export const { setCurrent } = currentSlice.actions;

export default currentSlice.reducer;
