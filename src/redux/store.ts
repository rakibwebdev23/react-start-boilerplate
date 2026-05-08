import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

import authReducer from "./api/auth/auth.slice";
import { baseAPI } from "./api/baseApi/baseApi";

// Persist Config
const persistConfig = {
  key: "auth",
  storage,
};

// Persisted Reducer
const persistedReducer = persistReducer(
  persistConfig,
  authReducer
);

// Store
export const store = configureStore({
  reducer: {
    // RTK Query API Reducer
    [baseAPI.reducerPath]: baseAPI.reducer,

    // Auth Reducer
    auth: persistedReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }).concat(baseAPI.middleware),
});

// Persistor
export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<
  typeof store.getState
>;

export type AppDispatch = typeof store.dispatch;