import { baseApi } from "./baseApi";

const slotApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        gelSlots: builder.query({
            query: () => {
                return {
                    url: '/slots/availability'
                }
            },
            providesTags: ['Slots'],
        }),
        gelSlotsByQueryId: builder.query({
            query: ({ date, id }) => {
                return {
                    url: `/slots/availability?date=${date}&roomId=${id}`
                }
            },
            transformResponse: (response) => {
                console.log('API Response:', response);
                return response.data;
            },
            providesTags: (result, error, { id }) => [{ type: 'Slots', id }],
        }),
        createSlot: builder.mutation({
            query: (data) => {
                return {
                    url: '/bookings',
                    method: 'POST',
                    body: data
                }
            },
        })
    })
})

export const { useGelSlotsQuery, useGelSlotsByQueryIdQuery, useCreateSlotMutation } = slotApi