import React from 'react'
import { useSelector } from 'react-redux'
import { TextButton } from '../StyledComponents'
import { Link } from 'react-router-dom'
import { icons } from '../constants'

const CartLength = () => {
  const { items } = useSelector(state => state)

  return (
    <div className='items-length'>
      {items === 0 ? <p>Cart is empty</p> : <p>Items: {items}</p>}
      <Link to='/'>
        <TextButton>
          <span className='icon'>{icons.back}</span>
          <span className='text'>Back to shop</span>
        </TextButton>
      </Link>
    </div>
  )
}

export default CartLength
