import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


export const initialState = {
    loading: false,
    hasErrors: false,
    cartItems: [],
    price: 0
    // rethink where this will come from
    // totalPrice: 0
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
        },
        updatePrice: (state, { payload }) => {
            state.price = payload
        }
    }
})


const { actions, reducer } = cartSlice

export const { 
    addToCart, 
    loadCart, 
    updatePrice } = actions

export default reducer 