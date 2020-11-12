import React from 'react'
import { CartCard } from '../StyledComponents'

const CartItem = ({ product: { image, name, id, price } }) => {
                     
 return (
     <CartCard key={id}>
       <img src={image} alt={name}/>
       <p>{ name }</p>
       <div className="card-info">
         <p>₦ { price }</p>
         <input 
          type="number" 
          name="qty" 
          id="qty" 
          placeholder="Quantity"
          // onChange={null}
          // value={3}
          />
       </div>
     </CartCard>    
   )
}
export default CartItem