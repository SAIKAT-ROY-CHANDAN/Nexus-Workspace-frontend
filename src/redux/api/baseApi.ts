import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
    endpoints: (builder) => ({
        getRooms: builder.query({
            query: () => {
                return {
                    url: '/rooms'
                }
            },
        })
    })
})

export const { useGetRoomsQuery, useLazyGetRoomsQuery } = baseApi