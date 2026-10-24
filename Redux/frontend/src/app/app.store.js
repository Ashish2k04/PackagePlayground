import {configureStore} from "@reduxjs/toolkit";
import counter from "../features/counterSlice.js"

export const store = configureStore({
    reducer: {
        counter: counter
    }
})