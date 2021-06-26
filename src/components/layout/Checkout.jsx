import React, { useEffect } from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import {
  // Button,
  CheckoutCard,
  ActionRow,
  EmptyCartStyle,
  FButton,
  Paragraph,
  TextButton
} from '../StyledComponents'
import Box from '../../assets/box.png'
import { icons } from '../constants'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import CartLength from './CartLength'
import { formatToComma } from '../../api/operationsAPI'
import { updateItems, updatePrice } from '../../features/cart/cartSlice'

const TotalView = ({ price }) => (
  <div className='total-price'>
    <p>Total: ₦ {formatToComma(price)}</p>
    <Link to='/confirm'>
      <TextButton>
        <span className='text'>Create Order</span>
        <span className='icon'>{icons.create}</span>
      </TextButton>
      {/* <FButton>Create Order</FButton> */}
    </Link>
  </div>
)

const EmptyCart = () => (
  <EmptyCartStyle>
    <div className='imageBox'>
      <img src={Box} alt='empty cart' />
    </div>
    <Paragraph>Cart is empty!</Paragraph>
    <Link to='/'>
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
        {cartItems.length !== 0 ? <TOTAL_ITEMS /> : <EmptyCart />}
      </ActionRow>
    </CheckoutCard>
  )
}

export default Checkout
