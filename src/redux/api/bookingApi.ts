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
        })
    })
})

export const { useCreateBookingMutation } = bookingApi