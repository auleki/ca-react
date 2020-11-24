import { createSlice } from "@reduxjs/toolkit";
import { original } from 'immer'
import axios from 'axios'

// const products = [
//     {
//         name: "Shirt 1",
//         id: 91,
//         price: 7000,
//     },
//     {
//         name: "Tie 9",
//         id: 99,
//         price: 2600,
//     },
//     {
//         name: "Playsuit 2",
//         id: 661,
//         price: 14000,
//     },
//     {
//         name: "Jean 2",
//         id: 78,
//         price: 9000,
//     },
//     {
//         name: "Jumpsuit 3",
//         id: 155,
//         price: 3500,
//     },
//     {
//         name: "Short 4",
//         id: 81,
//         price: 4000,
//     }
// ]

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
            const productItem = state.products.find(prod => 
                prod.name === payload.name
            )

            console.log(productItem)
            
            // const productItem = state.products.find(prod => {
            //     if (prod.name !== payload.name) {
            //         console.log("Product: ", original(prod.products))
            //         console.log("Payload: ", payload.name)
            //     } else {
            //         console.log('Something is up')
            //     }
            // })
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
                    : [...state.cartItems, {...productItem, qty: 1}]
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
        // updateQuantity: (state, { payload }) => {
        //     return {
        //         ...state,
        //         cartItems: state.cartItems.map(item => 
        //             item.name === payload.name
        //                 ? {...item, qty: +payload.value}
        //                 : item
        //             )
        //     }
        //     // return (state.cartItems.map(item => (
        //     //     item.name === payload.name 
        //     //         ? item.qty = payload.value
        //     //         : item
        //     // ))
        //     // )
        // },
        adjustQty: (state, { payload }) => {
            return {
                ...state,
                cartItems: state.cartItems.map(item => {
                    if (item.name === payload.name) {
                        if (payload.type === 'increase') {
                            return {...item, qty: item.qty + 1}
                        } else if (payload.type === 'decrease' && item.qty !== 1) {

                            return {...item, qty: item.qty - 1}
                        }
                    } 
                    return item 

                })
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
        }

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
    // updateQuantity
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