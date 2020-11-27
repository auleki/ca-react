import React, { useState, useEffect } from 'react';
import ClothSection from './ClothSection';
import { CardContainer } from '../StyledComponents';
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";
import { useSelector, useDispatch } from 'react-redux'
import { fetchRecipes } from "../../features/cart/cartSlice";

const ClothListings = () => {
  const dispatch = useDispatch();

  const { items, products, hasErrors, loading } = useSelector((state) => state)

  const override = css`
    display: block;
    margin: 0 auto;
    /* border-color: red; */
  `

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
          color={"#F36B2B"}
        />
        : hasErrors
          ? "Can't load clothes, refresh your browser"
          : products.map((cloth, i) => <ClothSection key={i} clothes={cloth} />)}
    </CardContainer>
  )
}

export default ClothListings