import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Naira from '../../nigeria-naira-currency-symbol (1).svg';
import Icon from '../Icon'
import { CardStyle, LinkButton, CardInfo } from '../StyledComponents';
import { addToCart } from '../../features/cart/cartSlice';
import { formatToComma } from "../../api/operationsAPI";

const Clothing = ({ clothes }) => {
  const [name, setName] = useState(clothes.name);
  const [imageUrl, setImageUrl] = useState(clothes.imageUrl);
  const [orderLink, setOrderLink] = useState(clothes.orderLink);
  const [price, setPrice] = useState(clothes.price);
  const [id, setId] = useState(clothes.id);
  
  const dispatch = useDispatch()

  

  // console.log(name);
  // console.log("Clothes loaded: ", clothes)


 return (
   <CardStyle>
     {/* <div className="item" key={id}>    */}
     <div key={id}>
     
       <img 
       src={imageUrl}
       alt={name}
       />
       
       
       {/* <div className="item-info"> */}
       <CardInfo>
       
         <span className="price">
         <Icon svg={Naira}/> {formatToComma(price)}  
         </span>
         {/* <p>{name}</p> */}
         
         <LinkButton 
          //  href={orderLink} 
           onClick={() => dispatch(addToCart(clothes))}
           className="buy">
          
         Add to cart <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </LinkButton>
       {/* </div> */}
       </CardInfo>
      
    </div>
  </CardStyle>
   )
}
export default Clothing

