import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ApplicationSlice from './slices/ApplicationSlice';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [], // Array of slice names to persist
    blacklist: [], // Array of slice names to exclude from storage
};

const rootReducer = combineReducers({
    ApplicationSlice: ApplicationSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
