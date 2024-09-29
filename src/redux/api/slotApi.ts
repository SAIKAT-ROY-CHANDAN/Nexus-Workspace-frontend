/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TSlotRoom } from "@/types/global";
import { baseApi } from "./baseApi";

export type TApiResponse<T> = {
    success: boolean;
    message: string;
    data: T;
};

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
            providesTags: ({ id }) => [{ type: 'Slots', id }],
        }),
        createSlot: builder.mutation({
            query: (data) => {
                return {
                    url: `/slots`,
                    method: "POST",
                    body: data
                }
            },
            transformResponse: (response: any) => {
                return {
                    success: response?.success || false,
                    message: response?.message || 'An error occurred',
                    data: response?.data || {},
                };
            },
            invalidatesTags: (response, _error, _args) => {
                console.log('Response:', response);

                if (response?.data?._id) {
                    return [{ type: 'Slots', id: response.data._id }];
                }

                return ['Slots'];
            },
        }),
        updatedSlot: builder.mutation({
            query: ({ id, updatedData }) => {
                return {
                    url: `/slots/${id}`,
                    method: "PATCH",
                    body: updatedData
                }
            },
            invalidatesTags: (_result, _error, { id }) => [
                { type: 'Slots', id },
                { type: 'Slots' },
            ],
        }),
        deleteSlot: builder.mutation({
            query: (id) => {
                return {
                    url: `/slots/${id}`,
                    method: "DELETE",
                }
            },
            invalidatesTags: (_result, _error, { id }) => [
                { type: 'Slots', id },
                { type: 'Slots' },
            ],
        }),
    })
})

export const {
    useGetSlotsQuery,
    useGelSlotsByQueryIdQuery,
    useCreateSlotMutation,
    useUpdatedSlotMutation,
    useDeleteSlotMutation
} = slotApi