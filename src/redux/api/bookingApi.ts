/* eslint-disable @typescript-eslint/no-explicit-any */
import { TBookingResponse } from "@/types/global";
import { baseApi } from "./baseApi";

const bookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createBooking: builder.mutation({
            query: ({ slotDetails, token }) => {
                return {
                    url: '/bookings',
                    method: 'POST',
                    body: slotDetails,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            },
        }),
        getAllBookings: builder.query({
            query: (token) => {
                return {
                    url: '/bookings',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            },
            providesTags: ['Bookings'],
            transformResponse: (response: any) => {
                console.log(response);
                return response.data
            },
        }),
        getMyBookings: builder.query({
            query: (token) => {
                return {
                    url: '/my-bookings',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            },
            transformResponse: (response: TBookingResponse) => {
                console.log(response);
                return response.data
            },
        }),
        approveBooking: builder.mutation({
            query: ({ id, token, status }) => {
                return {
                    url: `/bookings/status/${id}`,
                    method: 'PATCH',
                    body: { status },
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            },
            invalidatesTags: ['Bookings']
        }),
        deleteBooking: builder.mutation({
            query: ({ id, token }) => {
                return {
                    url: `/bookings/${id}`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            },
            invalidatesTags: ['Bookings']
        }),
    })
})

export const {
    useCreateBookingMutation,
    useGetAllBookingsQuery,
    useGetMyBookingsQuery,
    useApproveBookingMutation,
    useDeleteBookingMutation
} = bookingApi