import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ItemForCarousel, HeaderStyle } from '../StyledComponents'
import 'swiper/swiper.scss'

const Header = () => {
  let wallOne, wallTwo, wallThree, wallFour

  // wallOne =
  //   'https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606397477/IMG_20201118_183948_004_m7pato.jpg'
  wallOne =
    'https://res.cloudinary.com/checkadigs/image/upload/v1626714806/4_6001518644931069900-min_dhh53w.jpg'
  // wallTwo =
  //   'https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606397494/IMG_E4430_ypd1zz.jpg'
  wallTwo =
    'https://res.cloudinary.com/checkadigs/image/upload/v1626714969/4_6001518644931069894-min-min_w8idvi.jpg'
  // wallThree =
  //   'https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606397715/IMG_20201118_183928_674_baqb0c.jpg'
  wallThree =
    'https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606397715/IMG_20201118_183928_674_baqb0c.jpg'
  // wallFour =
  //   'https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606397696/IMG_20201121_123238_688_pizzwj.jpg'
  wallFour =
    'https://res.cloudinary.com/checkadigs-cloud/image/upload/v1606397696/IMG_20201121_123238_688_pizzwj.jpg'

  return (
    <HeaderStyle>
      <Swiper>
        <SwiperSlide>
          <ItemForCarousel bgColor={wallOne}></ItemForCarousel>
        </SwiperSlide>
        <SwiperSlide>
          <ItemForCarousel bgColor={wallTwo}></ItemForCarousel>
        </SwiperSlide>
        <SwiperSlide>
          <ItemForCarousel bgColor={wallThree}></ItemForCarousel>
        </SwiperSlide>
        <SwiperSlide>
          <ItemForCarousel bgColor={wallFour}></ItemForCarousel>
        </SwiperSlide>
      </Swiper>
    </HeaderStyle>
  )
}
export default Header
