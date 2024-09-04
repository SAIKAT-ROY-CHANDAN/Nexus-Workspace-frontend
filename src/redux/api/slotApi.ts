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
                return response.data;
            },
            // providesTags: (result, error, { id }) => [{ type: 'Slots', id }],
            providesTags: ({ id }) => [{ type: 'Slots', id }],
        }),
    })
})

export const { useGelSlotsQuery, useGelSlotsByQueryIdQuery } = slotApi