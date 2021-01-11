import { combineReducers } from '@reduxjs/toolkit'

import clothesReducer from '../features/clothes/clothesSlice'
import cartReducer from '../features/cart/cartSlice'

const rootReducer = combineReducers({
  clothes: clothesReducer,
  cart: cartReducer
})

// export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;

