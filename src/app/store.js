import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/gifs/thunkSlice';
import LoaderReducer from '../features/gifloader/loaderSlice';

export const store = configureStore({
  reducer: {
    searchAsync: counterReducer,
    Loader: LoaderReducer,
  },
});
