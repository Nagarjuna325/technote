import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://technotes-api.onrender.com' }),
    tagTypes: ['Note', 'User'],
    endpoints: builder => ({})
})