import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';

const CarouselItem = () => {
                     
 return (
   <div>
    <CarouselProvider    
      naturalSlideWidth={10}
      naturalSlideHeight={10}
      totalSlides={3}
      >
      <Slider>
        <Slide index={0}>First here here</Slide>
        <Slide index={1}>Second slide here</Slide>
        <Slide index={2}>Third slide here</Slide>
        <Slide index={3}>Fourth slide here</Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
   </div>
   )
}
export default CarouselItem