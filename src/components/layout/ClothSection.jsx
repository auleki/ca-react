import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';

import Clothing from './Clothing';

const ClothSection = ({ clothes: { products, title } }) => {

  const [merchs, setMerchs] = useState(products);

  // console.log('pulled clothes: ', products);

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