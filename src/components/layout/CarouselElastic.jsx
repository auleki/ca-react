import React from 'react'
import Carousel from 'react-elastic-carousel';
import Item from './Item';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 750, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
]


const CarouselElastic = () => {
                     
 return (
    <div>
      <Carousel breakPoints={breakPoints}>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
        <Item>7</Item>
        <Item>8</Item>      
      </Carousel>
    </div>
   )
}
export default CarouselElastic