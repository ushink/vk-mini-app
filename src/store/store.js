import { configureStore } from '@reduxjs/toolkit';
import { factApi } from '../services/factApi';

const store = configureStore({
    reducer: {
        [factApi.reducerPath]: factApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(factApi.middleware)
});

export default store;
