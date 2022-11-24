import { configureStore } from "@reduxjs/toolkit"
import { counterReducer } from "./reducer/R_counter.js"


//* 3 - Store
const store = configureStore({
    reducer: {
        counterReducer
    }
})

export default store



//TODO: Redux Toolkit Overview
// import { createSlice, configureStore } from "@reduxjs/toolkit"

// //* 1 - Actions
// const counterSlice = createSlice({
//     // Tạo tên Action
//     name: 'counter',

//     // Khởi tạo giá trị ban đầu
//     initialState: {
//         counter: 0
//     },
// })

// //* 2 - Reducers
// const counterReducer = counterSlice.reducer

// //* 3 - Store
// const store = configureStore({
//     reducer: {
//         counterReducer
//     }
// })

// export default store

// //* 4 - Export data
// export const counterSelector = (state) => state.counterReducer.counter