import React, { useEffect } from 'react'
import { 
  ShopCartContainer, 
  CartItemStyle, 
  Button,
  RowLayout } from '../StyledComponents'
import CartItem from './CartItem'
import Checkout from './Checkout'
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes, updateItems, updatePrice } from "../../features/cart/cartSlice";

const ShoppingCart = () => {
  const dispatch = useDispatch()  
  const { products, loading, hasErrors, cartItems } = useSelector((state) => state)
  
  useEffect(() => {
    window.scrollTo(0, 0);    
  }, [])

  let totalPrice = 0
  let items = 0
  
  useEffect(() => {
    cartItems.map(item => {
      items += item.qty
      totalPrice += item.price * item.qty 
    })    
    dispatch(updateItems(items))
    dispatch(updatePrice(totalPrice))
  
  }, [cartItems, totalPrice])
  

             
 return (
   <>
   <RowLayout>
     <ShopCartContainer>
      <CartItemStyle>
          { cartItems.map((item, i) => <CartItem key={i} product={item} />) }

          {/* Checkout Summary Card */}
          <Checkout />
      </CartItemStyle>
    
    </ShopCartContainer>
   </RowLayout>
   </>
   )
}
export default ShoppingCart