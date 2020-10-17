import React from 'react'

const Clothing = ({ clothing }) => {
  const { imgUrl, name, orderLink, price } = clothing;                     
 return (
   <div className="item">
    <img 
      src={imgUrl} 
      alt={name} 
      srcSet />

    <span className="price">
      <ion-icon name="pricetags-outline" />
      {price}
    </span>

    <Link  
      to={orderLink} 
      className="buy">
      BUY NOW
    </a>
  </div>
   )
}
export default Clothing