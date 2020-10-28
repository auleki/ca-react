import React, { useState, useEffect } from 'react'

const ClothListings = () => {
  const [clothes, setClothes] = useState([]);
  useEffect(() => {
    const fetchClothes = async (url) => {
      const result = await axios.get(url)
      setClothes(result.data)
    }
    fetchClothes(baseUrl)
  }, [])     

 return (
   
   )
}
export default ClothListings