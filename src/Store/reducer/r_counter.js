import { createSlice } from "@reduxjs/toolkit";

//* 1 - Actions
const counterSlice = createSlice({
    // Tạo tên Action
    name: 'counter',

    // Khởi tạo giá trị ban đầu
    initialState: {
        counter: 0
    },

    //code logic theo từng function
    reducers: {
        increment: (state, action) => {
            state.counter++
        },

        decrement: (state, action) => {
            state.counter--
        },

        mutiple: (state, action) => {
            state.counter *= 5
        },

        reset: (state, action) => {
            state.counter -= state.counter
        }
    }
})

//* 1.1 - Export Action
export const FCounter = counterSlice.actions

//* 2 - Reducers
export const counterReducer = counterSlice.reducer


//* 4 - Export data
export const counterSelector = (state) => {
    //code logic
    return state.counterReducer.counter
}