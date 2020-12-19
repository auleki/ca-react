import React from 'react'
import { CartCard, FButton } from '../StyledComponents'
import { formatToComma } from "../../api/operationsAPI";
import { useDispatch } from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete';
import { adjustQty, removeFromCart } from "../../features/cart/cartSlice";

const CartItem = ({ product: { imageUrl, name, id, price, qty } }) => {
  // const [sQty, setSqty] = useState(qty)
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
      </div>
      <div className="card-info">
        <p>₦ {formatToComma(price)}</p>
      </div>
      <div className="remove">
      <FButton primary 
          onClick={() => dispatch(removeFromCart(name))}>
          <DeleteIcon />
        </FButton>
      </div>
      <div className="item-actions">
        {/* <Button onClick={}> + </Button> */}
        <FButton
          onClick={() => dispatch(adjustQty({ name, type: "increase" }))}>
          +
        </FButton>
        {/* <input
          type="number"
          value={qty}
          id="qty"
          placeholder="Quantity"
          onChange={null}
        /> */}
        <span className="qty">
          {qty}
        </span>
        <FButton
          onClick={() => dispatch(adjustQty({ name, type: "decrease" }))}>
          -
        </FButton>
      </div>

    </CartCard>
  )
}
export default CartItem

