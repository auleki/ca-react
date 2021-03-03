import * as actionTypes from './shopTypes'
import clothService from '../services/operations'

export const addToCart = (itemId) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemId
    }
  }
}

export const removeFromCart = (itemId) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemId
    }
  }
}

export const adjustQty = (itemId, value) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      id: itemId,
      qty: value
    }
  }
}

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item
  }
}

export const initProducts = () => {
  return async dispatch => {
    const clothes = await clothService.fetchClothes()
    dispatch({
      type: actionTypes.INIT_PRODUCTS,
      data: clothes
    })
  }
}



    // type: actionTypes.INIT_PRODUCTS,
    // payload: products
export const checkoutOrder = (order) => {
  return {
    type: actionTypes.CHECKOUT_ORDER,
    payload: order
  }
}