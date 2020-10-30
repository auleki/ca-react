import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClothSection from './ClothSection';
import { CardContainer } from '../StyledComponents';
import Card from './Card';


const ClothListings = () => {
  const [clothes, setClothes] = useState([]);
  const baseUrl =  'https://afternoon-chamber-08446.herokuapp.com/api/clothing';

  useEffect(() => {
    const fetchClothes = async (url) => {
      const result = await axios.get(url)
      setClothes(result.data)
    }
    fetchClothes(baseUrl)
  }, [])     

 return (
   <CardContainer>
    {clothes.map((cloth, i) => <ClothSection key={i} clothes={cloth}/>)}
   </CardContainer>
   )
}
export default ClothListings