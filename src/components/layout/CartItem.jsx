import React, { useState } from 'react'
import { CartCard, Button, FButton } from '../StyledComponents'
import { formatToComma } from "../../api/operationsAPI";
import { useDispatch } from "react-redux";
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
        <FButton onClick={() => alert('YO')}>
          +
        </FButton>
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

