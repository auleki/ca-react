import React from 'react'
import moduleName from './'

const ClothSection = ({ clothSection, sectionId }) => {
  const { title } = clothSection;

 return (
  //  <section id="genesis" className="wow fadeInUpBig category">
    <section id={sectionId} className="wow fadeInUpBig category">
        <div className="title">
          <h2>{ title }</h2> 
        </div>
        <div className="owl-carousel owl-theme">
          <div className="item">
            <img src="images/sweat01-removebg.png" alt="" srcSet />
            <span className="price"><ion-icon name="pricetags-outline" /> N12,000</span>
            <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20red%20sweatshirt%20for%20N12,000" className="buy">BUY NOW</a>
          </div>
          <div className="item">
            <img src="images/sweat02 1t.png" alt="" srcSet />
            <span className="price"><ion-icon name="pricetags-outline" /> N14,000</span>
            <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20yellow%20sweatshirt%20for%20N14,000" className="buy">BUY NOW</a>
          </div>
          <div className="item">
            <img src="images/sweat03 1.png" alt="" srcSet />
            <span className="price"><ion-icon name="pricetags-outline" /> N12,000</span>
            <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20gray%20sweatshirt%20for%20N12,000" className="buy">BUY NOW</a>
          </div>
          <div className="item">
            <img src="images/sweat04 1.png" alt="" srcSet />
            <span className="price"><ion-icon name="pricetags-outline" /> N12,000</span>
            <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20light%20blue%20sweatshirt%20for%20N12,000" className="buy">BUY NOW</a>
          </div>  
          <div className="item">
            <img src="images/sweat05 1.png" alt="" srcSet />
            <span className="price"><ion-icon name="pricetags-outline" /> N11,000</span>
            <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20white%20sweatshirt%20for%20N11,000" className="buy">BUY NOW</a>
          </div>
        </div>          
      </section>
   )
}
export default ClothSection