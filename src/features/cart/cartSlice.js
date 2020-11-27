import { createSlice } from "@reduxjs/toolkit";
import { original } from 'immer'
import axios from 'axios'

export const initialState = {
    loading: false,
    hasErrors: false,
    cartItems: [],
    products: [],
    price: 0,
    items: 0
}

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const productItem = state.products.find(prod =>
                prod.name === payload.name
            )
            const inCart = state.cartItems.find(item => (
                item.name === payload.name ? true : false
            ))

            inCart ? console.log("YaaaaaY!") : console.log('Booo')

            return {
                ...state,
                cartItems: inCart
                    ? state.cartItems.map(item =>
                        item.name === payload.name
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cartItems, { ...payload, qty: 1 }]
            }
        },
        loadCart: (state, { payload }) => {
            state.cartItems = payload
            state.hasErrors = false
            state.loading = false
        },
        updatePrice: (state, { payload }) => {
            state.price = payload
        },
        updateItems: (state, { payload }) => {
            state.items = payload
        },
        updateQuantity: (state, { payload }) => {
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.name === payload.name
                        ? { ...item, qty: +payload.value }
                        : item
                )
            }
        },
        adjustQty: (state, { payload }) => {
            return {
                ...state,
                cartItems: state.cartItems.map(item => {
                    if (item.name === payload.name) {
                        if (payload.type === 'increase') {
                            return { ...item, qty: item.qty + 1 }
                        } else if (payload.type === 'decrease' && item.qty !== 1) {

                            return { ...item, qty: item.qty - 1 }
                        }
                    }
                    return item
                })
            }
        },
        removeFromCart: (state, { payload }) => {
            return {
                ...state, 
                cartItems: state.cartItems.filter(item => item.name !== payload)
            }
        },
        getClothes: state => {
            state.loading = true
        },
        getClothesSuccess: (state, { payload }) => {
            state.products = payload
            state.loading = false
            state.hasErrors = false
        },
        getClothesFailure: state => {
            state.loading = false
            state.hasErrors = true
        },
    }
})

const { actions, reducer } = cartSlice

export const {
    addToCart,
    loadCart,
    updatePrice,
    getClothes,
    adjustQty,
    getClothesSuccess,
    getClothesFailure,
    updateQuantity,
    updateItems, 
    removeFromCart
} = actions


export const fetchRecipes = () => {
    return async dispatch => {
        dispatch(getClothes())
        try {
            const uri = "https://afternoon-chamber-08446.herokuapp.com/api/clothing"
            const { data } = await axios.get(uri)
            dispatch(getClothesSuccess(data))
        } catch (error) {
            dispatch(getClothesFailure())
        }
    }
}

export default reducer 