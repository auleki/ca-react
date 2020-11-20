import React, { useEffect, useState } from 'react'
import { Button, CheckoutCard, ActionRow } from '../StyledComponents'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartLength from './CartLength'
import { formatToComma } from "../../api/operationsAPI";
import { updatePrice } from '../../features/cart/cartSlice'

const Checkout = () => {
                    
  const { price, cartItems } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  // const [total, setTotal] = useState(0)
  
  // console.log(cartItems)
  let totalPrice = 0
  
  useEffect(() => {
    cartItems.map(item => {
      totalPrice += item.price
    })
    // setTotal(totalPrice)
    dispatch(updatePrice(totalPrice))
  
  }, [cartItems, totalPrice])
  
  
 return (
    // <div className="checkout">
    <CheckoutCard>
        {/* <h2>Cart Summary</h2> */}
        <ActionRow>
          <CartLength />

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
    //  </div>
   )
}

export default Checkout