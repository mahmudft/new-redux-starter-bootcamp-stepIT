import {createSlice} from "@reduxjs/toolkit"


export const productSlice = createSlice({
    name: 'product',
    initialState: {
        cartItems: [],
        items: []
    },
    reducers: {
        addToCard: (state, action) =>{
            state.cartItems.push(action.payload)
        },
        removeFromCard: (state, action) =>{
           console.log(action.payload);
           state.cartItems = state.cartItems.filter(el => el.id != action.payload)
           console.log(state.cartItems);
        },
        fillBucket: (state, action) =>{
            state.items = action.payload
        }
    }
})

export const {addToCard, removeFromCard, fillBucket} = productSlice.actions

export default productSlice.reducer