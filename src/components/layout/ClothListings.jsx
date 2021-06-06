import React, { useEffect } from 'react';
import { formatToComma } from "../../api/operationsAPI";
import ClothSection from './ClothSection';
import { CardContainer, StyleClothCard, SButton } from '../StyledComponents';
import { css } from "@emotion/core";
import { icons } from '../constants'
import PuffLoader from "react-spinners/PuffLoader";
import { useSelector, useDispatch } from 'react-redux'
import { fetchRecipes, addToCart } from "../../features/cart/cartSlice";
import OutOfStock from '../../assets/outofstock.png'
import { updateItems, updatePrice } from "../../features/cart/cartSlice";
import IconButton from '../IconButton';

const ClothCard = ({ cloth }) => {
  const dispatch = useDispatch()
  const isDisabled = cloth.inStock ? false : true
  
  return (
    <StyleClothCard inStock={cloth.inStock}>
      <div className="info_one">
        <h4>{cloth.name}</h4>
        <p>{cloth.category}</p>
      </div>
      <div className="image">
        {!cloth.inStock && <img src={OutOfStock} alt="" className="outOfStock"/>}
        <img src={cloth.imageUrl} alt={cloth.name} />
      </div>
      <div className="info_two">
        <p className="price">₦{formatToComma(cloth.price)}</p> 
        <SButton disabled={isDisabled} onClick={() => dispatch(addToCart(cloth))} >
          <span className="text">{isDisabled ? "Out of stock" : "Add to cart"}</span>
          <span className="icon">{icons.plus}</span>
        </SButton>
        {/* <IconButton 
          text="Add To Cart" 
          btnFunction={addToCart}
          funParam={cloth}
          icon={icons.plus} 
          isDisabled={isDisabled}/> */}
        {/* <span>{cloth.inStock ? "AVAILABLE" : "FINISHED"}</span> */}
      </div>
      
    </StyleClothCard>
  )
}

const ClothListings = () => {
  const dispatch = useDispatch();

  useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

  const { cartItems, products, hasErrors, loading } = useSelector((state) => state)

  const override = css`
    display: block;
    margin: 0 auto;
    /* border-color: red; */
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
      {loading
        ? <PuffLoader
          loading={loading}
          css={override}
          size={200}
          color={"#ffffff"}
        />
        : hasErrors
          ? "Can't load clothes, refresh your browser"
          : products.map((cloth, i) => <ClothCard key={i} cloth={cloth} />)}
          {/* : products.map((cloth, i) => <ClothSection key={i} clothes={cloth} />)} */}
    </CardContainer>
  )
}

export default ClothListings