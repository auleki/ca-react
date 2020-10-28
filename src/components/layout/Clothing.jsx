import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Clothing = ({ clothes }) => {
  const [name, setName] = useState(clothes.name);
  const [imageUrl, setImageUrl] = useState(clothes.imageUrl);
  const [orderLink, setOrderLink] = useState(clothes.orderLink);
  const [price, setPrice] = useState(clothes.price);
  const [id, setId] = useState(clothes.id);
  
  // console.log('inside Cloth Prop: ', props)

  console.log(name);

 return (
   <div className="item" key={id}>   
    <p>{name}</p>

    <img 
      src={imageUrl}
      alt={name} 
      />

    <span className="price">
      <ion-icon name="pricetags-outline" />
      {price}
    </span>

    <a  
      href={orderLink} 
      className="buy">
      BUY NOW
    </a>
  </div>
   )
}
export default Clothing

