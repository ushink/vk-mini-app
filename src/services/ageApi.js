import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ageApi = createApi({
    reducerPath: 'age',
    tagTypes: ['age'],

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.agify.io/'
    }),

    endpoints: (build) => ({
        // получить возраст
        getAge: build.query({
            query: (value) => `?name=${value}`
        })
    })
});

export const { useGetAgeQuery } = ageApi;
