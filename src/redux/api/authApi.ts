import { baseApi } from "./baseApi";

interface User {
    address: string;
    email: string;
    name: string;
    phone: string;
    role: string;
    __v: number;
    _id: string;
}

// Define the type for the main response data
interface LoginResponseData {
    token: string;
    user: User;
}

// Define the type for the entire API response
interface LoginResponse {
    success: boolean;
    message: string;
    data: LoginResponseData;
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
            query: (data) => ({
                url: 'auth/login',
                method: "POST",
                body: data,
            }),
            transformResponse: (response: LoginResponse) => {
                return {
                    success: response.success,
                    message: response.message,
                    ...response.data,
                };
            },
        })
    })
})

export const { useCreateNewUserMutation, useLoginUserMutation } = authActionApi