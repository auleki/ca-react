import React, { useState, useEffect } from 'react'
// import Iframe from 'react-iframe'
import { IframePage } from "../StyledComponents";

const PaymentPage = () => {
  // const goTo = "http://www.youtube.com/embed/xDMP3i36naA"
  const [url, setUrl] = useState("")
  const goTo = "https://checkout.paystack.com/e65wpyr0hbngp2k"

  useEffect(() => {
    const data = localStorage.getItem("frameUrl")
    setUrl(data)
    console.log("FROM PAYMENT PAGE: ", data)
  } ,[])

  const settings = {
    height: "1000px",
    width: "1000px"
  }
  
  return (
    <IframePage>
      <iframe 
        {...settings}
        src={url}>          
      </iframe>
    </IframePage>
  )
}

export default PaymentPage