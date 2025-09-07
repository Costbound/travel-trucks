import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { filtersReducer } from './filters/slise';
import { favoritesReducer } from './favorites/slice';
import persistStore from 'redux-persist/es/persistStore';
import { campersReducer } from './campers/slice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};

const persistedFavorites = persistReducer(persistConfig, favoritesReducer);

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    favorites: persistedFavorites,
    campers: campersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
