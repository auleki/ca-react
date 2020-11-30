import React, { useState, useEffect } from 'react'
import Iframe from 'react-iframe'
import { IframePage } from "../StyledComponents";

const PaymentPage = () => {
  // const goTo = "http://www.youtube.com/embed/xDMP3i36naA"
  const [url, setUrl] = useState("")
  const goTo = "https://checkout.paystack.com/e65wpyr0hbngp2k"

  useEffect(() => {
    const data = localStorage.getItem("frameUrl")
    setUrl(data)
    console.log("FROM PAYMENT  PAGE: ", data)
  } ,[])
  
  return (
    <IframePage>
      <Iframe
        url={url}
        width="100%"
        height="900px"
        display="initial" />
    </IframePage>
  )
}

export default PaymentPage