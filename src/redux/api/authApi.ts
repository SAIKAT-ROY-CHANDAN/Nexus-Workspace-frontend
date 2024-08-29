import { baseApi } from "./baseApi";

interface LoginResponse {
    data: {
        success: boolean;
        message: string;
        data: {
            token: string;
            user: {
                address: string;
                email: string;
                name: string;
                phone: string;
                role: string;
                __v: number;
                _id: string;
            };
        };
    };
}

const authActionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createNewUser: builder.mutation({
            query: (data) => {
                return {
                    url: 'auth/signup',
                    method: "POST",
                    body: data
                }
            }
        }),
        loginUser: builder.mutation({
            query: (data) => {
                return {
                    url: 'auth/login',
                    method: "POST",
                    body: data
                }
            },
            transformResponse : (response: LoginResponse) => response.data
        })
    })
})

export const { useCreateNewUserMutation, useLoginUserMutation } = authActionApi