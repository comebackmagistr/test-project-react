import { createSlice } from '@reduxjs/toolkit';

export const elementsSlice = createSlice({
  name: 'elements',
  initialState: [{
    id: 1, oneElement: 'USD', buy: (Math.random() * 10).toString().slice(0, 6), secondElement: 'RUB', sell: (Math.random() * 10).toString().slice(0, 6),
  }, {
    id: 2, oneElement: 'RUB', buy: (Math.random() * 10).toString().slice(0, 6), secondElement: 'USD', sell: (Math.random() * 10).toString().slice(0, 6),
  }],
  reducers: {
  },
});

export default elementsSlice.reducer;
