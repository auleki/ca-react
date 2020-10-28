import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Clothing from './Clothing';

const ClothSection = () => {
  const [clothes, setClothes] = useState([]);

  // The clothSection will have a title 
  // const { title } = clothSection;

  const baseUrl =  'https://afternoon-chamber-08446.herokuapp.com/api/clothing';

  useEffect(() => {
    const fetchClothes = async (url) => {
      const result = await axios.get(url)
      // console.log(result.data);
      setClothes(result.data)
    }
    fetchClothes(baseUrl)
  }, [])

  console.log('pulled clothes: ', clothes);
 return (
  //  <section id="genesis" className="wow fadeInUpBig category">
  
    <div>
      { clothes.map((cloth, i) => <Clothing key={i} clothes={cloth} />) }
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