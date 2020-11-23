import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const initialState = {
    loading: false,
    hasErrors: false,
    cartItems: [],
    products: [],
    price: 0
}




const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const productItem = state.products.find(prod => prod.name === payload.name)
            // console.log("CI Defined?", payload.name)
            // console.log('in reducer::::', payload)
            const inCart = state.cartItems.find(item => (
                item.name === payload.name ? console.log("equal") : console.log("not")
                // if (item.name === payload.name) {
                //     console.log("equal")
                //     console.log("Item Name", item.name)
                //     console.log("Item Name", payload.name)
                //     // console.log(cartItem.name)
                //     return true
                // } else {
                //     console.log("not")
                //     console.log("cart Name", payload.name)
                //     // console.log(cartItem.name)
                //     return false
                // }
                
                // item.name === cartItem.name ? console.log(item) : console.log("False", item)
                // if (item.name === cartItem.name) {
                    //     console.log("matchItem:", item)
                //     return true
                // }
                // return false
))
            console.log(inCart)

            return {
                ...state,
                cartItems: inCart
                    ? state.cartItems.map(item =>
                        item.name === payload.name
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cartItems, { ...productItem, qty: 1 }]
            }

            // ______________________________________________________

            // if (!inCart) {
            //     return [...state.cartItems, {...item, qty: 1}]
            //     // Give a quantity of one 
            // } else {
            //     return state.cartItems.map(item => {
            //         item.name === payload.name 
            //             ? { ...item, qty: item.qty + 1 }
            //             : item
            //     })
            // }
            // state.cartItems.push(cartItem)
        },
        loadCart: (state, { payload }) => {
            state.cartItems = payload
            state.hasErrors = false
            state.loading = false
        },
        updatePrice: (state, { payload }) => {
            state.price = payload
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
        }

    }
})


const { actions, reducer } = cartSlice

export const {
    addToCart,
    loadCart,
    updatePrice,
    getClothes,
    getClothesSuccess,
    getClothesFailure
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