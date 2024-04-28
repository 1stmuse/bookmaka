import {configureStore} from '@reduxjs/toolkit';
import bookmarkReducer from './bookmarks';
import servicesReducer from './services';

// import { authApi } from './auth/api';

export const store = configureStore({
  reducer: {
    bookmarks: bookmarkReducer,
    services: servicesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
