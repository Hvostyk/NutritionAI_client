import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CounterState } from "./types";

const initialState: CounterState = {
    value: 0,
    history: [],
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) =>{
            state.value += 1
            state.history.push('increment')
        },

        decrement: (state) =>{
            state.value -= 1
            state.history.push('decrement')
        },

        incrementByAmount: (state, action: PayloadAction<number>) =>{
            state.value += action.payload
            state.history.push(`increment by ${action.payload}`)
        },

        reset: (state) => {
            state.value = 0
            state.history.push('reset')
        },
    },
})

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions
export const counterReducer = counterSlice.reducer