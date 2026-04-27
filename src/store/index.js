import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/es/storage';//default it localStorage

import counterReducer from './counterSlice';
const safeStorage = storage.default ? storage.default : storage;
const persistConfig = {
    key: 'root',
    storage: safeStorage,
    // whitelist: ['counter'] // optional
};
const persistedReducer = persistReducer(persistConfig, counterReducer);

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        ls_counter: persistedReducer,
    },
    // This is necessary so that Redux does not complain about non-serializable data.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },

        }),
});
export const persistor = persistStore(store);