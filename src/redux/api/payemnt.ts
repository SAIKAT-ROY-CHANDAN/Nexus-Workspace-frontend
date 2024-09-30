/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";

const paymentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        initiatePayment: builder.mutation({
            query: ({ bookingIds, user }: { bookingIds: string[], user: any }) => ({
                url: '/payment', 
                method: 'POST',
                body: { 
                    bookingIds,
                    user  
                },
            }),
        }),
    }),
});

export const { useInitiatePaymentMutation } = paymentApi;

export default paymentApi;
