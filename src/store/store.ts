// src/store.ts

import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import AuthSlice from './slices/AuthSlice';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [], //these reducer will not persist data
    whitelist: ['auth'], //these reduce will persist data
    version: 1,
    timeout: 0,
};

// Combine reducers
const rootReducer = combineReducers({
    auth: AuthSlice,
    // Add more reducers here
});

// Persist the root reducer
let persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

const persistor = persistStore(store);

export { persistor };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
