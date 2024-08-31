import { baseApi } from "./baseApi";

const slotApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        gelSlots: builder.query({
            query: () => {
                return {
                    url: '/slots/availability'
                }
            }
        })
    })
})

export const { useGelSlotsQuery } = slotApi