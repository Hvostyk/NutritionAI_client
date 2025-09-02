import { baseApi } from "@/shared/api/base-api";
import { BodyMetrics, PostBodyMetrics } from "./types";

export const bodyMetricsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createBodyMetrics: builder.mutation<BodyMetrics, PostBodyMetrics>({
            query: (bodyData) => ({
                url: '/bodyMetrics',
                method: 'POST',
                body: bodyData,
            })
        }),

        updateBodyMetrics: builder.mutation<BodyMetrics, { id: string, bodyData: PostBodyMetrics }>({
            query: ({ bodyData, id }) => ({
                url: `/bodyMetrics/${id}`,
                method: 'PUT',
                body: bodyData
            })
        }),

        getAllBodyMetrics: builder.query<BodyMetrics[], void>({
            query: () => ({
                url: '/bodyMetrics',
                method: "GET",
            })
        }),

        deleteBodyMetric: builder.mutation<{ message: string }, { id: string }>({
            query: (id) => ({
                url: `/bodyMetrics/${id}`,
                method: "DELETE",
            })
        })
    })
})

export const {
    useCreateBodyMetricsMutation,
    useUpdateBodyMetricsMutation,
    useGetAllBodyMetricsQuery,
    useLazyGetAllBodyMetricsQuery,
    useDeleteBodyMetricMutation,
} = bodyMetricsApi

export const {
    endpoints: { createBodyMetrics, updateBodyMetrics, getAllBodyMetrics, deleteBodyMetric }
} = bodyMetricsApi