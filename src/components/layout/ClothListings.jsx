import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClothSection from './ClothSection';


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
   <div>
    {clothes.map((cloth, i) => <ClothSection key={i} clothes={cloth}/>)}
   </div>
   )
}
export default ClothListings