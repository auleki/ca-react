import React, { useState, useEffect } from 'react';
import ClothSection from './ClothSection';
import { CardContainer } from '../StyledComponents';
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";
import { useSelector, useDispatch } from 'react-redux'
import { fetchRecipes } from "../../features/cart/cartSlice";

const ClothListings = () => {
  // const baseUrl = 'https://afternoon-chamber-08446.herokuapp.com/api/clothing';
  // const [clothes, setClothes] = useState([]);
  const dispatch = useDispatch();

  // const { clothing, hasErrors, loading } = useSelector((state) => state.cart)
  const { products, loading, hasErrors } = useSelector((state) => state)

  // console.log('CLOTH-LISTINGS:', products)
  
  useEffect(() => {
    
    // dispatch(fetchRecipes())
  } ,[dispatch])

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