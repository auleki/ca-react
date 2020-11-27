import React, { useState } from 'react'
import { CartCard, Button, FButton } from '../StyledComponents'
import { formatToComma } from "../../api/operationsAPI";
import { useDispatch } from "react-redux";
import { adjustQty, updateQuantity, removeFromCart } from "../../features/cart/cartSlice";

const CartItem = ({ product: { imageUrl, name, id, price, qty } }) => {
  const [sQty, setSqty] = useState(qty)
  const dispatch = useDispatch()

  // Kill this till input can be regulated to remain a number                    
  // const qtyHandler = (e) => {
  //   const value = Number(e.target.value)
  //   setSqty(value)
  //   dispatch(updateQuantity({ value, name }))
  // }


  return (
    <CartCard key={id}>
      <div className="cart-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="name">
        <p>{name}</p>
        <button 
          onClick={() => dispatch(removeFromCart(name))}>
          REMOVE FROM CART
        </button>
      </div>
      <div className="card-info">
        <p>₦ {formatToComma(price)}</p>
      </div>
      <div className="item-actions">
        {/* <Button onClick={}> + </Button> */}
        <FButton
          onClick={() => dispatch(adjustQty({ name, type: "increase" }))}>
          +
        </FButton>
        <input
          type="number"
          value={qty}
          id="qty"
          placeholder="Quantity"
          onChange={null}
        />
        <FButton
          onClick={() => dispatch(adjustQty({ name, type: "decrease" }))}>
          -
        </FButton>
      </div>

    </CartCard>
  )
}
export default CartItem

