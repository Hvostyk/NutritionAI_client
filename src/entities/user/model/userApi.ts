import { baseApi } from "@/shared/api/base-api";
import { UpdateUserRequest, UserProfile } from "./types";
import { LoginRequest, LoginResponse, RegisterRequest} from "@/ processes/auth/auth";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (userData) => ({
                url: '/login',
                method: 'POST',
                body: userData,
            })
        }),

        register: builder.mutation<LoginResponse, RegisterRequest>({
            query: (userData) => ({
                url: '/register',
                method: 'POST',
                body: userData,
            })
        }),

        current: builder.query<UserProfile, void>({
            query: () => ({
                url: '/current',
                method: 'GET',
            })
        }),

        getUserById: builder.query<UserProfile, string>({
            query: (id) => ({
                url: `/user/${id}`,
                method: 'GET'
            })
        }),

        updateUser: builder.mutation<UserProfile, { id: string, userData: UpdateUserRequest }>({
            query: ({ userData, id }) => ({
                url: `/user/${id}`,
                method: 'PUT',
                body: userData
            })
        })
    })
})

export const {
    useRegisterMutation,
    useLoginMutation,
    useCurrentQuery,
    useLazyCurrentQuery,
    useGetUserByIdQuery,
    useLazyGetUserByIdQuery,
    
} = userApi

export const {
    endpoints: { login, register, current, getUserById, updateUser }
} = userApi