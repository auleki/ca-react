import React from 'react'
import { Link } from 'react-router-dom'
import { SuccessCard, BasicBox, Title, Paragraph, FButton } from "../StyledComponents";
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
      <BasicBox>
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
            >
            Return to Shop
        </FButton>
        </Link>
      </BasicBox>
    </SuccessCard>
  )
}

export default OrderCompleted