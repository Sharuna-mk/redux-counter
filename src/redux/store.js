import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../redux/slice'

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default store