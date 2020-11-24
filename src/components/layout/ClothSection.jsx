import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { useSelector } from "react-redux";
import Clothing from './Clothing';

const ClothSection = ({ clothes: { products, title } }) => {
// const ClothSection = () => {

  const [merchs, setMerchs] = useState(products);

  // const merch = useSelector(state => state.products)

  // const [merch, setMerch] = useState(products)

  // console.log("SHOW MERCH:", merch)

  // console.log('pulled clothes: ', products);

 return (
  //  <section id="genesis" className="wow fadeInUpBig category">  
    <div className="cloth-section">
      <div>
        {/* <h3>{ title }</h3> */}
      </div>
      <Carousel>
        {merchs.map(
          (cloth, i) => 
          <Clothing key={i} clothes={cloth}/>
          )}
{/* 
          {
            merch.map((cloth, i) => <Clothing key={i} clothes={cloth} />)
          } */}


      </Carousel>
    </div>    
   )
}

export default ClothSection