import { createSlice } from "@reduxjs/toolkit";
import { User, UserProfile } from "./types";
import { userApi } from "./userApi";

interface IInitialState {
    user: User | null;
    isAuthenticated: boolean;
    users: User[] | null;
    current: UserProfile | null;
    token?: string;
}

const initialState: IInitialState = {
    user: null,
    isAuthenticated: false,
    users: null,
    current: null
}

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: () => initialState,
        resetUser: (state) => {
            state.user = null
        }
    },

    extraReducers: (builder) => {
        builder
            .addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
                state.token = action.payload.token
                state.isAuthenticated = true
            })
            .addMatcher(userApi.endpoints.current.matchFulfilled, (state, action) => {
                state.isAuthenticated = true
                state.current = action.payload
            })
            .addMatcher(userApi.endpoints.getUserById.matchFulfilled, (state, action) => {
                state.user = action.payload
            })
    }
})

export const { logout, resetUser } = slice.actions

export default slice.reducer