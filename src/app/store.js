import {configureStore} from "@reduxjs/toolkit"
import counterReducer from './features/counter/counterSlice.js'
import productReducer from './features/products/productSlice.js'
export default configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer,
    }
})