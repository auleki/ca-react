import React, { useEffect } from 'react';
import ClothSection from './ClothSection';
import { CardContainer } from '../StyledComponents';
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";
import { useSelector, useDispatch } from 'react-redux'
import { fetchRecipes } from "../../features/cart/cartSlice";
import { updateItems, updatePrice } from "../../features/cart/cartSlice";

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
          : products.map((cloth, i) => <ClothSection key={i} clothes={cloth} />)}
    </CardContainer>
  )
}

export default ClothListings