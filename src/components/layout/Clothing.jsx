import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Clothing = ({clothes: { id, name, imgUrl, category, price, orderLink }}) => {
  // const [name, setName] = useState(clothing.name);
  // const [imgUrl, setImgUrl] = useState(clothing.imgUrl);
  // const [orderLink, setOrderLink] = useState(clothing.orderLink);
  // const [price, setPrice] = useState(clothing.price);
  
  // console.log('inside Cloth Prop: ', props)

 return (
   <div className="item" key={id}>   
    <p>{name}</p>

    <img 
      src={imgUrl} 
      alt={name} 
      />

    <p>
      { category }
    </p>

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

