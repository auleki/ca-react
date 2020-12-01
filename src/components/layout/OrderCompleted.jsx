import React from 'react'
import { Link } from 'react-router-dom'
import { SuccessCard, Title, Paragraph, FButton } from "../StyledComponents";
import { useDispatch } from "react-redux";
import { resetCart } from "../../features/cart/cartSlice";

const OrderCompleted = () => {
  const dispatch = useDispatch()
  const { orderNumber } = JSON.parse(localStorage.getItem('payInfo'))
  console.log(orderNumber)

  // useEffect(() => {
  //   // console.log(lsInfo)

  // }, [])

  function resetStore() {
    localStorage.clear()
    dispatch(resetCart())
  }

  return (
    <SuccessCard>
      <Title>Congrats!</Title>
      <Paragraph>
        Your order has been received.
      </Paragraph>
      <Paragraph>
        Order number #{orderNumber}.
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