import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
        reset: () => 0,
        incrementByValue: (state, action) => state + action.payload

    }
})

export const { increment, decrement, reset, incrementByValue } = slice.actions
export default slice.reducer