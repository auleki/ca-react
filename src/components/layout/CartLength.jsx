import React from 'react'
import { useSelector } from "react-redux";
import { FButton } from '../StyledComponents'
import { Link } from "react-router-dom";

const CartLength = () => {

  const { items } = useSelector(state => state)

  return (
    <div className="items-length">
      {items === 0
        ? <p>Cart is empty</p>
        : <p>Items: {items}</p>
      }
      <Link to="/">
        <FButton>
          Back to shop
        </FButton>
      </Link>
    </div>
  )
}

export default CartLength