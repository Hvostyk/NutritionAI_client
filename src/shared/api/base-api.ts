import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../lib/redux";
import { BASE_URL } from "@/constants";


const apiQuery = fetchBaseQuery({
    baseUrl: `${BASE_URL}/api`,
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).user.token || localStorage.getItem("token");

        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }

        return headers;
    }
});

const baseQueryWithRetry = retry(apiQuery, { maxRetries: 1 });

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithRetry,
    refetchOnMountOrArgChange: true,
    tagTypes: [],
    endpoints: () => ({}),
});