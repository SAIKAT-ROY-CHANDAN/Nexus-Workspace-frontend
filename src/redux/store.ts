import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import { authReducer } from './slices/authSlice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { timeAndDateReducer } from './slices/timeAndDate';
import { uploadReducer } from './slices/fileImage';
import { amenitiesReducer } from './slices/amenites';
import { totalPriceSliceReducer } from './slices/totalPrice';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: persistedAuthReducer,
        timeAndDate: timeAndDateReducer,
        imageLink: uploadReducer,
        amenities: amenitiesReducer,
        totalPrice: totalPriceSliceReducer
    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    }).concat(baseApi.middleware)
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

