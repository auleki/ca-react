import React, { useEffect } from 'react'
import { 
  ShopCartContainer, 
  CartItemStyle, 
  Button,
  RowLayout } from '../StyledComponents'
import CartItem from './CartItem'
import Checkout from './Checkout'
import { useSelector } from "react-redux";

const ShoppingCart = (props) => {

  const { cartItems } = useSelector(state => state)
  // console.log(cartItems)

  useEffect(() => {
    window.scrollTo(0, 0);    
  }, [])

             
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