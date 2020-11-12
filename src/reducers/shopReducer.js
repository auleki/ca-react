import * as actionTypes from '../actions/shopTypes'

const INITIAL_STATE = {
  products: [],
  cart: [],
  currentItem: null
}

const shopReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_PRODUCT':
      return [...state, action.data]
    // case "INIT_NOTES":
    case actionTypes.INIT_PRODUCTS:
      return [...state, action.data];
    case actionTypes.ADD_TO_CART:
      return {};
    case actionTypes.REMOVE_FROM_CART:
      return {};
    case actionTypes.ADJUST_QTY:
      return {};
    case actionTypes.LOAD_CURRENT_ITEM:
      return {};
    default:
      return state
  }
}



export default shopReducer





















