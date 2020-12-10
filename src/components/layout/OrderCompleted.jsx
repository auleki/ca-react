import React from 'react'
import { Link } from 'react-router-dom'
import { SuccessCard, BasicBox, FButton, SpanText, SubTitle, Title } from "../StyledComponents";
import { useDispatch } from "react-redux";
import { resetCart } from "../../features/cart/cartSlice";
import Congrats from '../../assets/giphy.webp'
import { ToastContainer } from 'react-toastify'
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

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
        <Title>
          ORDER RECEIVED!
        </Title>
        <SubTitle>
          ORDER NUMBER: <span className="order_number">{orderNumber || null}</span>
        </SubTitle>
        <SpanText>
          We shall contact you shortly
        </SpanText>
        <Link to="/">
          <FButton primary onClick={resetStore}>
            <ArrowBackRoundedIcon />
            <span>Return to Shop</span>
          </FButton>
        </Link>
        <ToastContainer />
      </BasicBox>
    </SuccessCard>
  )
}

export default OrderCompleted