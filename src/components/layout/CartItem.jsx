import React, { useState } from 'react'
import { CartCard, Button, FButton } from '../StyledComponents'
import { formatToComma } from "../../api/operationsAPI";
import { useDispatch } from "react-redux";
import { increaseQty } from "../../features/cart/cartSlice";
import { updateQuantity } from "../../features/cart/cartSlice";

const CartItem = ({ product: { imageUrl, name, id, price, qty } }) => {
  const [sQty, setSqty] = useState(qty)
  const dispatch = useDispatch()
                     
  const qtyHandler = (e) => {
    const value = e.target.value
    setSqty(value)
    dispatch(updateQuantity(value, name))
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
        {/* <Button onClick={}> + </Button> */}
        <FButton 
          onClick={() => dispatch(increaseQty({ name, type: "increase" }))}>
          +
        </FButton>
          <input 
            type="number" 
            value={qty}
            id="qty" 
            placeholder="Quantity"
            // onChange={qtyHandler}
            // value={3}
            />
        <FButton
          onClick={() => dispatch(increaseQty({ name, type: "decrease" }))}>
             - 
        </FButton>
        </div>
      
     </CartCard>
   )
}
export default CartItem

