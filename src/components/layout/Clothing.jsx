import React from 'react'
// import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import Naira from '../../nigeria-naira-currency-symbol (1).svg';
// import Icon from '../Icon'
import { CardStyle, CardInfo, FButton } from '../StyledComponents'
import { addToCart } from '../../features/cart/cartSlice'
import { formatToComma } from '../../api/operationsAPI'

// const Price = ({ price }) => `<Icon svg={Naira}/> ${formatToComma(price)}`

const Clothing = ({ clothes }) => {
  const dispatch = useDispatch()
  const isDisabled = clothes.inStock ? false : true

  return (
    <CardStyle>
      {/* <div className="item" key={id}>    */}
      <div key={clothes.name}>
        <img src={clothes.imageUrl} alt={clothes.name} />
        {/* <div className="item-info"> */}
        <CardInfo>
          <span className='price'>
            {clothes.inStock ? (
              `₦ ${formatToComma(clothes.price)}`
            ) : (
              <h6>OUT OF STOCK</h6>
            )}
          </span>
          {/* <p>{name}</p> */}

          <FButton
            uppercase
            margin
            x={0}
            y={1.5}
            disabled={isDisabled}
            onClick={() => dispatch(addToCart(clothes))}
            className='buy'
          >
            Add to cart{' '}
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
              />
            </svg>
          </FButton>
        </CardInfo>
      </div>
    </CardStyle>
  )
}
export default Clothing
