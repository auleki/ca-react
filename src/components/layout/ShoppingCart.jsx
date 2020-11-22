import React from 'react'
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

  const products = [
    {
      "name": "Sweat 01",
      "price": 12000,
      "orderLink": "https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20red%20sweatshirt%20for%20N12,000",
      "imageUrl": "https://res.cloudinary.com/checkadigs/image/upload/v1601239437/sweat01-removebg_kalqrc.png"
    },
    {
      "name": "Sweat 02",
      "price": 12000,
      "orderLink": "https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20red%20sweatshirt%20for%20N12,000",
      "imageUrl": "https://res.cloudinary.com/checkadigs/image/upload/v1601239432/sweat02_1t_tb5fde.png"
    },
    {
      "name": "Sweat 03",
      "price": 12000,
      "orderLink": "https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20red%20sweatshirt%20for%20N12,000",
      "imageUrl": "https://res.cloudinary.com/checkadigs/image/upload/v1601239433/sweat03_1_citj9x.png"
    },
    {
      "name": "Sweat 04",
      "price": 12000,
      "orderLink": "https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20red%20sweatshirt%20for%20N12,000",
      "imageUrl": "https://res.cloudinary.com/checkadigs/image/upload/v1601239432/sweat04_1_gquhex.png"
    },
    {
      "name": "Sweat 05",
      "price": 12000,
      "orderLink": "https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20red%20sweatshirt%20for%20N12,000",
      "imageUrl": "https://res.cloudinary.com/checkadigs/image/upload/v1601239431/sweat05_1_jofsp6.png"
    }
  ]
                     
 return (
   <>
   {/* <Navbar /> */}
   <RowLayout>
     <ShopCartContainer>
      <CartItemStyle>
          { cartItems.map((item, i) => <CartItem key={i} product={item} />) }
          {/* { products.map(item => <CartItem product={item} />) } */}    
          <Checkout />
      </CartItemStyle>
    {/* <h2>Raise Hell.</h2> */}
    </ShopCartContainer>
   </RowLayout>
   </>
   )
}
export default ShoppingCart