import { configureStore } from '@reduxjs/toolkit';
import checkedBoxListReducer from './checkedBoxSlice.js';
import imageListReducer from './imageListSlice.js';
import needChangeReducer from './needChangeSlice.js';
import refReducer from './refSlice.js';

export const store = configureStore({
  reducer: {
    counter: checkedBoxListReducer,
    imageList: imageListReducer,
    needChange: needChangeReducer,
    refList: refReducer
  },
});