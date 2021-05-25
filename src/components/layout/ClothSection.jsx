import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Clothing from './Clothing';
import Slider from 'react-slick'

const ClothSection = ({ clothes: { products, title } }) => {
  // eslint-disable-next-line
  const [merchs, setMerchs] = useState(products);
  console.log("::MERCHIS::", products)

  const settings = {
    dots: true,
    arrows: true,
    lazyLoad: true,
    infinite: true,
    speed: 300,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
  }

 return (
  //  <section id="genesis" className="wow fadeInUpBig category">  
    <div className="cloth-section">
      <div>
        <h3>{ title }</h3>
      </div>
      <Slider {...settings} className="center">
        {/* {merchs.map(
          (cloth, i) => 
          <Clothing key={i} clothes={cloth}/>
          )} */}
      </Slider>
    </div>    
   )
}

export default ClothSection