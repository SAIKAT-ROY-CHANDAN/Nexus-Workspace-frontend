/* eslint-disable @typescript-eslint/no-explicit-any */
import { TSlotRoom } from "@/types/global";
import { baseApi } from "./baseApi";

export type TApiResponse<T> = {
    success: boolean;
    message: string;
    data: T;
  };
  
  // Now, declare the response type for an array of TSlotRoom
  export type TSlotRoomsResponse = TApiResponse<TSlotRoom[]>

const slotApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSlots: builder.query({
            query: () => {
                return {
                    url: '/slots/availability'
                }
            },
            transformResponse: (response: TSlotRoomsResponse) => response.data,
            providesTags: ['Slots'],
        }),
        gelSlotsByQueryId: builder.query({
            query: ({ date, id }) => {
                return {
                    url: `/slots/availability?date=${date}&roomId=${id}`
                }
            },
            transformResponse: (response: any) => {
                return response.data;
            },
            // providesTags: (result, error, { id }) => [{ type: 'Slots', id }],
            providesTags: ({ id }) => [{ type: 'Slots', id }],
        }),
    })
})

export const { useGetSlotsQuery, useGelSlotsByQueryIdQuery } = slotApi