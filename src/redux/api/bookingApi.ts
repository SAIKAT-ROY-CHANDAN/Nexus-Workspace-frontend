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
                console.log(token);
                return {
                    url: '/bookings',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            },
            transformResponse: (response: any) => {
                console.log(response);
                return response.data
            },
        }),
        getMyBookings: builder.query({
            query: (token) => {
                console.log(token);
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
    })
})

export const { useCreateBookingMutation, useGetAllBookingsQuery, useGetMyBookingsQuery } = bookingApi