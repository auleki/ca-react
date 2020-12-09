import React from 'react'
import { Link } from 'react-router-dom'
import { SuccessCard, BasicBox, Title, Paragraph, FButton } from "../StyledComponents";
import { useDispatch } from "react-redux";
import { resetCart } from "../../features/cart/cartSlice";
import Congrats from '../../assets/giphy.webp'

const OrderCompleted = () => {
  const dispatch = useDispatch()
  const { orderNumber } = JSON.parse(localStorage.getItem('payInfo'))
  // console.log(orderNumber)
  // "9ndpponcu3" - Our messiah
  function resetStore() {
    localStorage.clear()
    dispatch(resetCart())
  }

  return (
    <SuccessCard>
      <BasicBox url={Congrats}>
        <Paragraph>
          Your order has been received
      </Paragraph>
        <Paragraph>
          Order number <span className="order_number">#{orderNumber || null}</span>
      </Paragraph>
        <Link to="/">
          <FButton
            onClick={resetStore}
            >
            Return to Shop
        </FButton>
        </Link>
      </BasicBox>
    </SuccessCard>
  )
}

export default OrderCompleted