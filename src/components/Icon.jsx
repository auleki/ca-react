import React from 'react'
import { IconStyle } from './StyledComponents'

const Icon = ({ svg }) => {
                     
 return (
   <IconStyle>   
    <img src={svg} alt={svg}/>
   </IconStyle>
 )
}
export default Icon