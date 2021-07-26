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
            <img src={url} alt={url} />
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
        value={size.size}
        name='wear_size'
        id={size.size}
        //
        // isSelect
        onChange={onChange}
      />
      <label htmlFor={size.size}>{size.sizeAbbreviation}</label>
    </>
  )
}

const SelectSize = ({ size, cloth }) => {
  console.log('PL - SELECT SIZE', size)

  function onSelect (e) {
    console.log(`${cloth.productId} is selected of size ${e.target.value}`)
  }

  return (
    <p>
      <input
        type='checkbox'
        className='checkbox'
        // checked={}
        onChange={onSelect}
        name={cloth.productId}
        id={`${cloth.productId}-${size.size}`}
        value={size.size}
      />
      <label htmlFor={`${cloth.productId}-${size.size}`}>
        {size.sizeAbbreviation}
      </label>
    </p>
  )
}

const ClothCard = ({ cloth }) => {
  // const [pickedSizes, setPickedSizes] = useState(
  //   new Array(cloth.sizes.length).fill({ ...cloth.sizes, selected: false })
  // )
  const [check, setCheck] = useState(cloth.sizes.map(_ => false))
  // console.log('TESTING SIZE', cloth)
  const dispatch = useDispatch()
  const isDisabled = cloth.inStock ? false : true

  console.log(check)

  // const cartContent = {
  //   ...cloth,
  //   price: cloth.price * pickedSizes.length
  // }

  // function onSizeSelect (e) {
  //   console.log('RADIO SELECTION', e.target.value)
  //   setPickedSizes(e.target.value)
  // }

  return (
    <StyleClothCard inStock={cloth.inStock}>
      {/* <div className='image'> */}
      {/* {!cloth.inStock && <img src={OutOfStock} alt='' className='outOfStock' />} */}
      <ImageSlider imageUrls={cloth.imageUrls} />
      {/* </div> */}
      <div className='info_one'>
        <p className='cloth_name'>{cloth.name}</p>
        <p className='price'>₦{formatToComma(cloth.price)}</p>
      </div>
      {/* TRYING OUT SELECT BOX  */}
      <div className='select_size'>
        {/* <h4>Select your size</h4> */}
        <div className='checkbox_container'>
          {cloth.sizes.map((size, i) => (
            <SelectSize key={i} size={size} cloth={cloth} />
          ))}
        </div>
      </div>
      <div className='info_two'>
        <p className='category'>{cloth.category}</p>
        <SButton
          disabled={isDisabled}
          onClick={() => dispatch(addToCart(cloth))}
          // onClick={() => dispatch(addToCart(cartContent))}
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

  // const clothesToLoad = products ?

  const override = css`
    width: 100%;
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
    // if (products.length === 0) {
    // }
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
