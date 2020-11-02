import React from 'react'
import { CartCard } from '../StyledComponents'

const CartItem = ({ product: { image, name, id, price } }) => {
                     
 return (
     <CartCard key={id}>
       <img src={image} alt={name}/>
       <p>{ name }</p>
       <p>₦ { price }</p>
       <input 
        type="number" 
        name="qty" 
        id="qty" 
        onChange={null}
        value={null}/>
     </CartCard>    
   )
}
export default CartItem