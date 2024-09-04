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
            query: (token) => ({
                url: '/bookings',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            transformResponse: (response) => response.data,
        }),
    })
})

export const { useCreateBookingMutation, useGetAllBookingsQuery } = bookingApi