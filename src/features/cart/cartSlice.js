import { createSlice } from "@reduxjs/toolkit";
// import { useSelector } from 'react-redux'

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
        addToCart: (state, { payload: cartItem }) => {
            // const products = useSelector(state => state.clothes)
            // const item = products.find(prod => prod.name === cartItem.name)
            // const inCart = state.cartItems.find(item => (
            //     item.name === cartItem.name ? true : false
            //     ))

            // return {
            //     ...state, 
            //     cartItems: inCart 
            //         ? state.cartItems.map(item => 
            //             item.name === cartItem.name
            //                 ? {...item, qty: item.qty + 1}
            //                 : item
            //             )
            //         : [...state.cartItems, {...item, qty: 1}]
            // }
            
            // // if (!inCart) {
            // //     return [...state.cartItems, {...item, qty: 1}]
            // //     // Give a quantity of one 
            // // } else {
            // //     return state.cartItems.map(item => {
            // //         item.name === cartItem.name 
            // //             ? { ...item, qty: item.qty + 1 }
            // //             : item
            // //     })
            // // }
            state.cartItems.push(cartItem)
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