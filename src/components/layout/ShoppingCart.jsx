import React from 'react'
import { 
  ShopCartContainer, 
  CartItemStyle, 
  Button,
  RowLayout } from '../StyledComponents'
import Navbar from './Navbar'
import CartItem from './CartItem'
import Checkout from './Checkout'

const ShoppingCart = (props) => {

  const productInfo = {
    image: "https://res.cloudinary.com/checkadigs/image/upload/v1601239437/sweat01-removebg_kalqrc.png",
    name: "Shorts",
    id: 1094,
    price: 3000
  }
                     
 return (
   <>
   <Navbar />
   <RowLayout>
     <ShopCartContainer>
      <CartItemStyle>
        <div className="shopping-list">
          {/* Loop through CartItems */}
          <CartItem product={productInfo}/>          
          <CartItem product={productInfo}/>          
          <CartItem product={productInfo}/>          
          <CartItem product={productInfo}/>          
          <CartItem product={productInfo}/>          
          <CartItem product={productInfo}/>          
          <CartItem product={productInfo}/>          
          <CartItem product={productInfo}/>          
          <CartItem product={productInfo}/>          
        </div>
        
        <Checkout />

      </CartItemStyle>
    {/* <h2>Raise Hell.</h2> */}
    </ShopCartContainer>
   </RowLayout>
   </>
   )
}
export default ShoppingCart