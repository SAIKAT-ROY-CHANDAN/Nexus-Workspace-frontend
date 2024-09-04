import { TRoomsResponse, TSingleRoomResponse } from '@/types/global'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
    tagTypes: ['Slots'],
    endpoints: (builder) => ({
        getRooms: builder.query({
            query: () => {
                return {
                    url: '/rooms'
                }
            },
            transformResponse: (response: TRoomsResponse) => response.data
        }),
        getSingleRoom: builder.query({
            query: (id) => {
                return {
                    url: `/rooms/${id}`
                }
            },
            transformResponse: (response: TSingleRoomResponse) => response.data
        })
    })
})

export const { useGetRoomsQuery, useGetSingleRoomQuery } = baseApi