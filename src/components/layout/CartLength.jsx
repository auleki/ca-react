import React from 'react'
import { useSelector } from "react-redux";
import { Button } from '../StyledComponents'
import { Link } from "react-router-dom";

const CartLength = () => {
    
    const cartItems = useSelector(state => state.cartItems)
    return (
        <div className="items-length">
            {cartItems.length === 0
              ? <p>Cart is empty</p>
              : <p>Items: {cartItems.length}</p>
            }
            <Link to="/">
              <Button>
                Back to shop
              </Button>
            </Link>
          </div>
    )
}

export default CartLength