import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const mealApi =createApi({
    reducerPath:'mealApi',
    baseQuery : fetchBaseQuery({ baseUrl : 'www.themealdb.com/api/json/v1/1 /'}),
    endpoints: (bulider)=>({
        mealByCategory:bulider.query({
            query: ()=>({
                url:'categories.php',
                method: "GET",
            }),
        }),


        searchByName:bulider.query({
            query:(query)=>({
                url:`/search.php?s=${query}`,
                method : "GET"
            })
        }),



    }),
});

export const{ useMealByCategoryQuery, useSearchByNameQuery}=mealApi;