import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Clothing from './Clothing';

const ClothSection = ({ clothes: { products, title } }) => {
  // eslint-disable-next-line
  const [merchs, setMerchs] = useState(products);

 return (
  //  <section id="genesis" className="wow fadeInUpBig category">  
    <div className="cloth-section">
      <div>
        <h3>{ title }</h3>
      </div>
      <Carousel>
        {merchs.map(
          (cloth, i) => 
          <Clothing key={i} clothes={cloth}/>
          )}
      </Carousel>
    </div>    
   )
}

export default ClothSection