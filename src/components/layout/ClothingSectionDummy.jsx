import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';

import ClothingDummy from './ClothingDummy';

const ClothSectionDummy = () => {
  
  const title = "Freedom"

 return (
  //  <section id="genesis" className="wow fadeInUpBig category">  
    <div className="cloth-section">
      <div>
        <h3>{ title }</h3>
      </div>
      <Carousel>
        {/* {merchs.map(
          (cloth, i) => 
          <Clothing key={i} clothes={cloth}/>
          )} */}
          <ClothingDummy />
      </Carousel>
    </div>    
   )
}

export default ClothSectionDummy
// <section id={sectionId} className="wow fadeInUpBig category">
//         <div className="title">
//           <h2>{ title }</h2> 
//         </div>
//         <div className="owl-carousel owl-theme">
//           { /* In here we loop through clothes and */}
//         </div>          
//       </section>