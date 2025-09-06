import { counterReducer } from "@/features/counter/model/counter-slice"
import { configureStore } from "@reduxjs/toolkit"
import { baseApi } from "../api/base-api"
import user from '../../entities/user/model/userSlice'
import bodyMetrics from "@/entities/bodyMetrics/model/bodyMetricsSlice"
import { listenerMiddleware } from "@/ processes/middleware/authMiddleware"
export const makeStore = () => {
    return configureStore({
        reducer: {
            counter: counterReducer,
            [baseApi.reducerPath]: baseApi.reducer,
            user,
            bodyMetrics,
        },
        middleware: (getDefautlMiddleware) => {
            return getDefautlMiddleware()
                .concat(baseApi.middleware)
                .prepend(listenerMiddleware.middleware)
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']