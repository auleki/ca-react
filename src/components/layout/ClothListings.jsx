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
  // console.log('IMAGES', imageUrls)
  SwiperCore.use([Navigation, Pagination])
  return (
    <ImageSliderContainer>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        pagination={true}
        // onSlideChange={() => console.log('slide changed')}
        // onSwiper={swiper => console.log('swiper instance', swiper)}
      >
        {/* {sizesList.map(size => (
        <SizeInput size={size} pickedSize={pickedSize} />
      ))} */}
        {imageUrls.map((url, i) => (
          <SwiperSlide key={i}>
            <img className='productImage' src={url} alt={url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </ImageSliderContainer>
  )
}

const SizeInput = ({ size, onChange }) => {
  return (
    <>
      {/* <div className='size_select' onClick={onSizeSelect}> */}
      <input
        type='radio'
        value={size}
        name='wear_size'
        id={size}
        //
        // isSelect
        onChange={onChange}
      />
      <label htmlFor={size}>{size}</label>
    </>
  )
}

const ClothCard = ({ cloth }) => {
  const [pickedSizes, setPickedSizes] = useState(['Small', 'Medium'])
  const dispatch = useDispatch()
  const isDisabled = cloth.inStock ? false : true

  console.log('CLOTH OBJECTS', cloth)

  const cartContent = { ...cloth, selectedSizes: pickedSizes }

  // console.log('cartContent:', cartContent)

  function onSizeSelect (e) {
    console.log('RADIO SELECTION', e.target.value)
    setPickedSizes(e.target.value)
  }

  return (
    <StyleClothCard inStock={cloth.inStock}>
      <div className='info_one'>
        <p className='cloth_name'>{cloth.name}</p>
        <p className='price'>₦{formatToComma(cloth.price)}</p>
      </div>
      <div className='image'>
        {/* {!cloth.inStock && (
          <img src={OutOfStock} alt='' className='outOfStock' />
        )} */}
        <ImageSlider imageUrls={cloth.imageUrls} />
      </div>
      {/* RADIO FOR SIZES COMPONENT GOES HERE  */}
      {/* <div className='size_select' onChange={onSizeSelect}>
        <div className='radio_container'>
        {cloth.sizes.map((size, id) => (
          <SizeInput key={id} onChange={onSizeSelect} size={size} />
          ))}
          </div>
        </div> */}
      {/* TRYING OUT SELECT BOX  */}
      <div className='select_size'>
        <h4>Select your size</h4>
        <div className='checkbox_container'>
          <p>
            <input
              type='checkbox'
              className='checkbox'
              name={cloth.productId}
              id={`${cloth.productId}-${cloth.sizes[0]}`}
              value='large'
            />
            <label htmlFor={`${cloth.productId}-${cloth.sizes[0]}`}>L</label>
          </p>
          <p>
            <input
              type='checkbox'
              className='checkbox'
              name={cloth.productId}
              id={`${cloth.productId}-${cloth.sizes[1]}`}
              value='extraLarge'
            />
            <label htmlFor={`${cloth.productId}-${cloth.sizes[1]}`}>XL</label>
          </p>
        </div>
      </div>
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
  `

  let totalPrice = 0
  let items = 0

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
        // products.map((cloth, i) => <ClothSection key={i} clothes={cloth} />)
        testResponse.map((cloth, i) => <ClothCard key={i} cloth={cloth} />)
      )}
    </CardContainer>
  )
}

export default ClothListings
