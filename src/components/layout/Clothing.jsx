import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Item from './Item'
import { CardStyle } from '../StyledComponents';

const Clothing = ({ clothes }) => {
  const [name, setName] = useState(clothes.name);
  const [imageUrl, setImageUrl] = useState(clothes.imageUrl);
  const [orderLink, setOrderLink] = useState(clothes.orderLink);
  const [price, setPrice] = useState(clothes.price);
  const [id, setId] = useState(clothes.id);
  
  // console.log('inside Cloth Prop: ', props)
  // <ion-icon name="pricetags-outline" />

  console.log(name);

 return (
   <CardStyle>
     {/* <div className="item" key={id}>    */}
     <div key={id}>
     
       <img 
       src={imageUrl}
       alt={name}
       />
       
       
       <div className="item-info">
         <span className="price">
         {price}
         </span>
         <p>{name}</p>
         
         <a
           href={orderLink} 
           className="buy">
         BUY NOW
          </a>
       </div>
      
    </div>
  </CardStyle>
   )
}
export default Clothing

