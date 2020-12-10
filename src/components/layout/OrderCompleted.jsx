import React from 'react'
import { Link } from 'react-router-dom'
import { SuccessCard, BasicBox, Paragraph, FButton } from "../StyledComponents";
import { useDispatch } from "react-redux";
import { resetCart } from "../../features/cart/cartSlice";
import Congrats from '../../assets/giphy.webp'
import { ToastContainer, toast } from 'react-toastify'

const OrderCompleted = () => {
  const dispatch = useDispatch()
  const { orderNumber } = JSON.parse(localStorage.getItem('payInfo'))
  // console.log(orderNumber)
  // "9ndpponcu3" - Our messiah
  function resetStore() {
    localStorage.clear()
    dispatch(resetCart())
  }

  // const infoAlert = (msg) => toast.error(msg)

  return (
    <SuccessCard>
      <BasicBox url={Congrats}>
        <Paragraph>
          We received your order
        </Paragraph>
        <Paragraph>
          Order number: <span className="order_number">#{orderNumber || null}</span>
        </Paragraph>
        <Link to="/">
          <FButton primary onClick={resetStore}>
            Return to Shop
          </FButton>
        </Link>
        <ToastContainer />
      </BasicBox>
    </SuccessCard>
  )
}

export default OrderCompleted