import React, { useState } from 'react'
import { CartCard, Button } from '../StyledComponents'
import { formatToComma } from "../../api/operationsAPI";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../../features/cart/cartSlice";

const CartItem = ({ product: { imageUrl, name, id, price, qty } }) => {
  const [sQty, setSqty] = useState(qty)
  const dispatch = useDispatch()
                     
  const qtyHandler = (e) => {
    setSqty(e.target.value)
    dispatch(updateQuantity(e.target.value, name))
  }
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
            value={sQty}
            id="qty" 
            placeholder="Quantity"
            onChange={qtyHandler}
            // value={3}
            />
        <Button> - </Button>
        </div>
      
     </CartCard>
   )
}
export default CartItem

