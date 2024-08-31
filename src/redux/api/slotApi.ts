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
                return {
                    url: `api/slots/availability?date=${date}&roomId=${id}`
                }
            }
        }),
    })
})

export const { useGelSlotsQuery, useGelSlotsByQueryIdQuery } = slotApi