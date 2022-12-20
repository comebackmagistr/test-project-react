import { configureStore } from '@reduxjs/toolkit';
import elementsReducer from './slices/elementsSlice';
import currentElementReducer from './slices/currentElementSlice';
import archiveReducer from './slices/archiveSlice';

const store = configureStore({
  reducer: {
    elements: elementsReducer,
    currentElement: currentElementReducer,
    archive: archiveReducer,
  },
});
export default store;
