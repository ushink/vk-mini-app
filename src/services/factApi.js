import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const factApi = createApi({
    reducerPath: 'fact',
    tagTypes: ['fact'],

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://catfact.ninja/'
    }),

    endpoints: (build) => ({
        // получить рандомный факт
        getFact: build.query({
            query: () => `fact/`
        })
    })
});

export const { useGetFactQuery } = factApi;
