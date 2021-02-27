import React from 'react'
// import Carousel from "react-elastic-carousel";
import { ItemForCarousel, HeaderStyle } from "../StyledComponents";
import Slider from 'react-slick'


const Header = () => {
  let wallOne, wallTwo, wallThree, wallFour

  wallOne = "https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606397477/IMG_20201118_183948_004_m7pato.jpg"
  wallTwo = "https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606397494/IMG_E4430_ypd1zz.jpg"
  wallThree = "https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606397715/IMG_20201118_183928_674_baqb0c.jpg"
  wallFour = "https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606397696/IMG_20201121_123238_688_pizzwj.jpg"

  const settings = {
    dots: true,
    arrows: false,
    lazyLoad: false,
    infinite: true,
    speed: 100,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 90000,
    cssEase: "linear",
  }
  
  return (
    <HeaderStyle>
      <Slider {...settings} className="slider">

      <ItemForCarousel bgColor={wallFour}>        
      </ItemForCarousel>

      <ItemForCarousel bgColor={wallOne}>    
      </ItemForCarousel>

      <ItemForCarousel bgColor={wallTwo}>
      </ItemForCarousel>

      <ItemForCarousel bgColor={wallThree}>
      </ItemForCarousel>


    </Slider>
    </HeaderStyle>
    
  )
}
export default Header