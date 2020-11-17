import React from 'react'
import { CartCard, Button } from '../StyledComponents'
import { formatToComma } from "../../api/operationsAPI";

const CartItem = ({ product: { imageUrl, name, id, price } }) => {
                     
 return (
     <CartCard key={id}>
       <div className="cart-image">
        <img src={imageUrl} alt={name}/>
       </div>
       <div className="name">
        <p>{ name }</p>

       </div>
       <div className="card-info">
         <p>₦ { formatToComma(price) }</p>
       </div>
       <div className="item-actions">
        <Button> + </Button>
          <input 
            type="number" 
            name="qty" 
            id="qty" 
            placeholder="Quantity"
            // onChange={null}
            // value={3}
            />
        <Button> - </Button>
        </div>
      
     </CartCard>
   )
}
export default CartItem

