import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { accessToken } from './constants';


export const movieApi = createApi({
    reducerPath: 'movieApi',
    // www.themealdb.com/api/json/v1/1/ 
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
    endpoints: (builder) => ({

        movieByCategory: builder.query({
            query: (query) => ({
                url: `movie/${query}`,
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: accessToken
                },
                params:{
                    page : 1
                }
            })
        }),


        
    }),
});

export const { useMovieByCategoryQuery } = movieApi;