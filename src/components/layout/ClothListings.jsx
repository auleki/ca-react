import React, { useEffect, useState } from 'react'
import { formatToComma } from '../../api/operationsAPI'
import {
  CardContainer,
  StyleClothCard,
  SButton,
  ImageSliderContainer
} from '../StyledComponents'
import { css } from '@emotion/core'
import { icons } from '../constants'
import PuffLoader from 'react-spinners/PuffLoader'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchRecipes,
  addToCart,
  updateItems,
  updatePrice
} from '../../features/cart/cartSlice'
import OutOfStock from '../../assets/outofstock.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.min.css'
import testResponse from '../../response-update.json'

const ImageSlider = ({ imageUrls }) => {
  console.log('IMAGES', imageUrls)
  SwiperCore.use([Navigation, Pagination])
  return (
    <ImageSliderContainer>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        pagination={true}
        onSlideChange={() => console.log('slide changed')}
        onSwiper={swiper => console.log('swiper instance', swiper)}
      >
        {/* {sizesList.map(size => (
        <SizeInput size={size} pickedSize={pickedSize} />
      ))} */}
        {imageUrls.map((url, i) => (
          <SwiperSlide key={i}>
            <img className='productImage' src={url} alt='' srcset='' />
          </SwiperSlide>
        ))}
      </Swiper>
    </ImageSliderContainer>
  )
}

const SizeInput = () => {
  const [pickedSize, setPickedSize] = useState('')

  function onSizeSelect (e) {
    setPickedSize(e.target.value)
  }
  // console.log('SIZES:', size)
  // console.log('PICKED SIZES:', pickedSize)
  return (
    <div className='size_select' onClick={onSizeSelect}>
      <h4>Select your size</h4>
      <div className='radio_container'>
        {/* PLACE RADIO COMPONENT - PASS ARRAY OF SIZES - RETURN ID TO SIZE VARIABLE AFTER */}
        {/* <input type='radio' value={pickedSize} name='wear_size' id={size} /> */}
        <input type='radio' value={pickedSize} name='wear_size' id='small' />
        {/* <label htmlFor={size}>{size}</label> */}
      </div>
    </div>
  )
}

const ClothCard = ({ cloth, sizesList }) => {
  const dispatch = useDispatch()
  const isDisabled = cloth.inStock ? false : true

  return (
    <StyleClothCard inStock={cloth.inStock}>
      <div className='info_one'>
        <p className='cloth_name'>{cloth.name}</p>
        <p className='price'>₦{formatToComma(cloth.price)}</p>
      </div>
      <div className='image'>
        {!cloth.inStock && (
          <img src={OutOfStock} alt='' className='outOfStock' />
        )}
        <ImageSlider imageUrls={cloth.imageUrls} />

        {/* <img src={cloth.imageUrl} alt={cloth.name} /> */}
      </div>
      {/* RADIO FOR SIZES COMPONENT GOES HERE  */}
      <div className='info_two'>
        <p className='category'>{cloth.category}</p>
        <SButton
          disabled={isDisabled}
          onClick={() => dispatch(addToCart(cloth))}
        >
          <span className='text'>
            {isDisabled ? 'Out of stock' : 'Add to cart'}
          </span>
          <span className='icon'>{icons.plus}</span>
        </SButton>
      </div>
    </StyleClothCard>
  )
}

const ClothListings = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { cartItems, products, hasErrors, loading } = useSelector(
    state => state
  )

  const override = css`
    display: block;
    margin: 0 auto;
    /* border-color: red; */
  `

  let totalPrice = 0
  let items = 0

  const sizesList = [
    {
      sizes: ['small', 'medium', 'large']
    },
    {
      sizes: ['small', 'medium']
    },
    {
      sizes: ['small']
    },
    {
      sizes: ['medium', 'large']
    },
    {
      sizes: ['small', 'medium', 'large', 'extra-large']
    }
  ]

  useEffect(() => {
    // eslint-disable-next-line
    cartItems.map(item => {
      // eslint-disable-next-line
      items += item.qty
      // eslint-disable-next-line
      totalPrice += item.price * item.qty
    })
    dispatch(updateItems(items))
    dispatch(updatePrice(totalPrice))
  }, [cartItems, totalPrice])

  useEffect(() => {
    dispatch(fetchRecipes())
  }, [dispatch])

  return (
    <CardContainer>
      {loading ? (
        <PuffLoader
          loading={loading}
          css={override}
          size={200}
          color={'#ffffff'}
        />
      ) : hasErrors ? (
        "Can't load clothes, refresh your browser"
      ) : (
        // using test response data instead or {PRODUCTS}
        testResponse.map((cloth, i) => (
          <ClothCard key={i} sizesList={sizesList} cloth={cloth} />
        ))
      )}
      {/* : products.map((cloth, i) => <ClothSection key={i} clothes={cloth} />)} */}
    </CardContainer>
  )
}

export default ClothListings
