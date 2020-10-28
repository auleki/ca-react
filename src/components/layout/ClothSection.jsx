import React, { useState, useEffect } from 'react';
// import axios from 'axios' 
import Clothing from './Clothing';

const ClothSection = ({ clothes: { products, title } }) => {

  const [merchs, setMerchs] = useState(products);


  console.log('pulled clothes: ', products);
 return (
  //  <section id="genesis" className="wow fadeInUpBig category">  
    <div>
      <div>
        <h3>{ title }</h3>
      </div>
        {/* clothes.map((cloth, i) => <Clothing key={i} clothes={cloth} />) */}
        {merchs.map((cloth, i) => <Clothing key={i} clothes={cloth}/>)}
    </div>    
   )
}
export default ClothSection

// <section id={sectionId} className="wow fadeInUpBig category">
//         <div className="title">
//           <h2>{ title }</h2> 
//         </div>
//         <div className="owl-carousel owl-theme">
//           { /* In here we loop through clothes and */}
//         </div>          
//       </section>