import React from 'react'
import { Button, CheckoutCard } from '../StyledComponents'
const Checkout = () => {
                     
 return (
    // <div className="checkout">
    <CheckoutCard>
        <h2>Cart Summary</h2>
        <div>
          <p>Total: (1 items)</p>
          <p>N 5,000</p>
        </div>

        <Button primary>
          Proceed To Checkout
        </Button>
     </CheckoutCard>
    //  </div>
   )
}
export default Checkout