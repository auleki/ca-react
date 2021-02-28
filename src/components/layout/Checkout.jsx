import React, { useEffect } from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
  Button,
  CheckoutCard,
  ActionRow,
  EmptyCartStyle,
  FButton,
  SubTitle
} from '../StyledComponents'
import Shopping from '../../assets/shopping.webp'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartLength from './CartLength'
import { formatToComma } from "../../api/operationsAPI";
import { updateItems, updatePrice } from "../../features/cart/cartSlice";

const TotalView = ({ price }) => (
  <div className="total-price">
    <p>Total: ₦ {formatToComma(price)}</p>
    <Link to="/confirm">
      <FButton>
        Create Order
      </FButton>
    </Link>
  </div>
)

const EmptyCart = () => (
  <EmptyCartStyle>
    <div>
      <img src={Shopping} alt="empty cart"/>
    </div>
    <SubTitle>Empty Cart</SubTitle>
    <Link to="/">
      <FButton primary>
      <ArrowBackIcon /> <span>Go Shopping</span> 
      </FButton>
    </Link>
  </EmptyCartStyle>
)

const TOTAL_ITEMS = () => {
  const { cartItems, price } = useSelector(state => state)
  const dispatch = useDispatch()

  let totalPrice = 0
  let itemCount = 0

  useEffect(() => {
    // eslint-disable-next-line
    cartItems.map(item => {
      // eslint-disable-next-line
      itemCount += item.qty
      // eslint-disable-next-line
      totalPrice += item.price * item.qty
    })
    dispatch(updateItems(itemCount))
    dispatch(updatePrice(totalPrice))

  }, [cartItems, totalPrice, itemCount])

  return (
    <>
      <CartLength />
      <TotalView price={price} />
    </>
  )
}

const Checkout = () => {
  const { cartItems } = useSelector(state => state)

  return (
    <CheckoutCard>
      <ActionRow>
        {
          cartItems.length !== 0
            ? <TOTAL_ITEMS />
            : <EmptyCart />
        }

      </ActionRow>
    </CheckoutCard>
  )
}

export default Checkout