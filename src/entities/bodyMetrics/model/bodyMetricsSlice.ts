import { createSlice } from "@reduxjs/toolkit";
import { BodyMetrics } from "./types";
import { bodyMetricsApi } from "./bodyMetricsApi";
import { RootState } from "@/shared/lib/redux";

interface IInitialState {
    currentBodyMetric: BodyMetrics | null
    bodyMetrics: BodyMetrics[] | null
}

const initialState: IInitialState = {
    currentBodyMetric: null,
    bodyMetrics: null,
}

const slice = createSlice({
    name: 'bodyMetrics',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addMatcher(bodyMetricsApi.endpoints.getCurrentBodyMetrics.matchFulfilled, (state, action) => {
                state.currentBodyMetric = action.payload
            })
            .addMatcher(bodyMetricsApi.endpoints.getAllBodyMetrics.matchFulfilled, (state, action) => {
                state.bodyMetrics = action.payload
            })
    }
})

export default slice.reducer

export const selectCurrentBodyMetrics = (state: RootState) => state.bodyMetrics.currentBodyMetric

export const selectAllBodyMetrics = (state: RootState) => state.bodyMetrics.bodyMetrics