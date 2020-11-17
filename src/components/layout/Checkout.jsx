import React, { useEffect, useState } from 'react'
import { Button, CheckoutCard, ActionRow } from '../StyledComponents'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartLength from './CartLength'
import { formatToComma } from "../../api/operationsAPI";

const Checkout = () => {
                    
  const cartItems = useSelector(state => state.cart.cartItems)

  const [total, setTotal] = useState(0)
  
  console.log(cartItems)
  let totalPrice = 0
  
  useEffect(() => {
    cartItems.map(item => {
      totalPrice += item.price
    })
    setTotal(totalPrice)
  }, [cartItems, totalPrice])
  
  
 return (
    // <div className="checkout">
    <CheckoutCard>
        {/* <h2>Cart Summary</h2> */}
        <ActionRow>
          <CartLength />

          <div className="total-price">
            <p>Total: N{formatToComma(total)}</p>
            <Button primary>
              Create Order
            </Button>
          </div>
        </ActionRow>
     </CheckoutCard>
    //  </div>
   )
}

export default Checkout