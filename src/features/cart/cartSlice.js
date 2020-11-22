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

            // ______________________________________________________

            // if (!inCart) {
            //     return [...state.cartItems, {...item, qty: 1}]
            //     // Give a quantity of one 
            // } else {
            //     return state.cartItems.map(item => {
            //         item.name === cartItem.name 
            //             ? { ...item, qty: item.qty + 1 }
            //             : item
            //     })
            // }
            state.cartItems.push(cartItem)
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
            state.clothing = payload
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
        const uri = "https://afternoon-chamber-08446.herokuapp.com/api/clothing"
        try {            
            const { data } = await axios.get(uri)
            dispatch(getClothesSuccess(data))
        } catch (error) {
            dispatch(getClothesFailure())
        }
    }
}


export default reducer 