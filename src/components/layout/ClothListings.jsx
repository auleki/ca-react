import React, { useState, useEffect } from 'react';
import ClothSection from './ClothSection';
import { CardContainer } from '../StyledComponents';
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";
import { useSelector, useDispatch } from 'react-redux'
import { fetchRecipes, updateItems, updatePrice } from "../../features/cart/cartSlice";

const ClothListings = () => {
  const dispatch = useDispatch();

  // const { clothing, hasErrors, loading } = useSelector((state) => state.cart)
  const { products, loading, hasErrors, cartItems } = useSelector((state) => state)
  
  useEffect(() => {    
    dispatch(fetchRecipes())
  } ,[dispatch])

  let totalPrice = 0
  let items = 0
  
  useEffect(() => {
    cartItems.map(item => {
      items += item.qty
      totalPrice += item.price * item.qty 
    })    
    dispatch(updateItems(items))
    dispatch(updatePrice(totalPrice))
  
  }, [cartItems, totalPrice])


  const override = css`
    display: block;
    margin: 0 auto;
    /* border-color: red; */
  `
  return (
    <CardContainer>

      {loading 
        ? <PuffLoader 
            loading={loading}
            css={override}
            size={200}
            color={"#F36B2B"}
            /> 
        : hasErrors 
        ? "Can't load clothes, refresh your browser"
        : products.map((cloth, i) => <ClothSection key={i} clothes={cloth}/>) }
    </CardContainer>
  )
}


export default ClothListings