/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";

const slotApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        gelSlots: builder.query({
            query: () => {
                return {
                    url: '/slots/availability'
                }
            }
        }),
        gelSlotsByQueryId: builder.query({
            query: ({ date, id }) => {
                console.log(date, id);
                return {
                    url: `/slots/availability?date=${date}&roomId=${id}`
                }
            },
            transformResponse: (response: any) => response.data
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