import React from 'react'
import Carousel from "react-elastic-carousel";
import { ItemForCarousel } from "../StyledComponents";

const Header = () => {
  let wallOne, wallTwo, wallThree, wallFour, wallFive

  wallOne = "https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606397477/IMG_20201118_183948_004_m7pato.jpg"
  wallTwo = "https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606397494/IMG_E4430_ypd1zz.jpg"
  wallThree = "https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606397715/IMG_20201118_183928_674_baqb0c.jpg"
  wallFour = "https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606397696/IMG_20201121_123238_688_pizzwj.jpg"

  return (
    <Carousel
      className="carousel"
      showArrows={false}
      enableSwipe={false}
      enableAutoPlay={true}>
      {/* <ItemForCart>
        <header className="wow fadeInDownBig">
          <div className="left">
            <h1>We are live!</h1>
            <div className="paras">
              <p>Place your orders now via Whatsapp</p>

            </div>

            <div className="actions">
              <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi%20there%20Checkadigs,%20I'd%20love%20to%20make%20a%20purchase" className="order-button" target="_blank" rel="noreferrer">
                <span>Place Order</span><i className="lab la-whatsapp" />
              </a>
              <a href="./quiz.html" className="out-button">
                <span>Giveaway Quiz</span>
              </a>
            </div>
          </div>

          <div className="point">
            <i id="word" className="las la-angle-double-down" />
          </div>
        </header>
      </ItemForCart> */}

      <ItemForCarousel>        
        <img src={wallOne} alt={wallOne} />
      </ItemForCarousel>

      <ItemForCarousel>
        <img src={wallTwo} alt={wallTwo} />
      </ItemForCarousel>

      <ItemForCarousel>
        <img src={wallThree} alt={wallThree} />
      </ItemForCarousel>

      <ItemForCarousel>
        <img src={wallFour} alt={wallFour} />
      </ItemForCarousel>

    </Carousel>
  )
}
export default Header