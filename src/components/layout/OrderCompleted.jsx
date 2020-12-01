import React from 'react'
import { Link } from 'react-router-dom'
import { Page, SuccessCard, Title, Paragraph, FButton } from "../StyledComponents";
import { useDispatch } from "react-redux";
import { resetCart } from "../../features/cart/cartSlice";

const OrderCompleted = () => {
  const dispatch = useDispatch()

  function resetStore () {
    localStorage.clear()
    dispatch(resetCart())
  }
  
  return (
    <SuccessCard>
      <Title>Congrats!</Title>
      <Paragraph>
        Your order has been received, we will be in touch
        </Paragraph>
      <Link to="/">
        <FButton 
          onClick={resetStore}
          primary>
          Return to Shop
        </FButton>
      </Link>
    </SuccessCard>
  )
}

export default OrderCompleted