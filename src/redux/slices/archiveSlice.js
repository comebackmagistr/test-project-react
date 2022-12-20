import { createSlice } from '@reduxjs/toolkit';

export const archiveSlice = createSlice({
  name: 'archive',
  initialState: [],
  reducers: {
    addArchive: (state, action) => [...state, action.payload],
  },
});

export const { addArchive } = archiveSlice.actions;

export default archiveSlice.reducer;
