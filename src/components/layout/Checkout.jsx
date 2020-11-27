import React, { useEffect, useState } from 'react'
import { Button, CheckoutCard, ActionRow } from '../StyledComponents'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartLength from './CartLength'
import { formatToComma } from "../../api/operationsAPI";
import { updateItems, updatePrice } from "../../features/cart/cartSlice";

const Checkout = () => {
                    
  // const [itemCount, setItemCount] = useState(0)
  const {cartItems, price } = useSelector(state => state)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   setItemCount(items)
  // }, [items])

  let totalPrice = 0
  let itemCount = 0

  useEffect(() => {
    cartItems.map(item => {
      itemCount += item.qty
      totalPrice += item.price * item.qty 
    })    
    dispatch(updateItems(itemCount))
    dispatch(updatePrice(totalPrice))
  
  }, [cartItems, totalPrice, itemCount])
  

 return (
    <CheckoutCard>
        <ActionRow>
          <CartLength/>
          <div className="total-price">
            <p>Total: N{formatToComma(price)}</p>
            <Link to="/confirm">
              <Button primary>
                Create Order
              </Button>
            </Link>
          </div>
        </ActionRow>
     </CheckoutCard>
   )
}

export default Checkout