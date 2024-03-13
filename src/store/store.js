import { configureStore } from '@reduxjs/toolkit';
import { factApi } from '../services/factApi';
import { ageApi } from '../services/ageApi';

const store = configureStore({
    reducer: {
        [factApi.reducerPath]: factApi.reducer,
        [ageApi.reducerPath]: ageApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(factApi.middleware)
            .concat(ageApi.middleware)
});

export default store;