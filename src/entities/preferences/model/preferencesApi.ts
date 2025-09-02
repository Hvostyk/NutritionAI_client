import { baseApi } from "@/shared/api/base-api";
import { PostPreferences, Preferences } from "./types";

export const preferencesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createPreferences: builder.mutation<Preferences, PostPreferences>({
            query: (preferencesData) => ({
                url: '/preferences',
                method: "POST",
                body: preferencesData,
            })
        }),

        updatePreferences: builder.mutation<Preferences, { id: string, bodyData: PostPreferences }>({
            query: ({ bodyData, id }) => ({
                url: `/preferences/${id}`,
                method: 'PUT',
                body: bodyData
            })
        }),


        getPreferences: builder.query<Preferences, void>({
            query: () => ({
                url: '/preferences',
                method: "GET",
            })
        }),
    }),
})

export const {
    useCreatePreferencesMutation,
    useUpdatePreferencesMutation,
    useGetPreferencesQuery,
    useLazyGetPreferencesQuery
} = preferencesApi

export const {
    endpoints: { createPreferences, updatePreferences, getPreferences }
} = preferencesApi