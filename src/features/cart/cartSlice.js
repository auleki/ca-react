import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


export const initialState = {
    loading: false,
    hasErrors: false,
    cartItems: [],
    // rethink where this will come from
    // totalPrice: 0,
    // will pass in the values in view
    // cartLength: 0
}

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: {
            reducer(state, { payload: cartItem }) {
                // const { name, price, imageUrl } = payload
                state.cartItems.push(cartItem)
            }, 
            // prepare(cartItemOL) {
            //     return {
            //         payload: { cartItemOL }
            //     }
            // }
        },
        loadCart: (state, { payload }) => {
            state.cartItems = payload
            state.hasErrors = false
            state.loading = false
            // state.totalPrice = payload
        }
    }
})


const { actions, reducer } = cartSlice

export const { addToCart, loadCart } = actions

export default reducer 