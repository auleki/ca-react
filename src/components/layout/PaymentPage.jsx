import React, { useState, useEffect } from 'react'
// import { parse } from 'uuid';
import { FButton } from "../StyledComponents";
import { IframePage } from "../StyledComponents";
import { returnToken } from "../../services/operations";
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
// import 

const PaymentPage = () => {    
  const data = localStorage.getItem("payInfo")
  const history = useHistory()
  const { paymentUrl, tRef } = JSON.parse(data)
  const GOLDEN = 'sk_test_a3150b31e7a217d2488132a436e6df8d28dec651'

  const verifyPayment = async () => {
    try {
      const verifyUri = `${process.env.REACT_APP_PS_VERIFY}/${tRef}`
      const currentToken = returnToken(GOLDEN)
      const config = {
        headers: { Authorization: currentToken }
      }
      const res = await axios.get(verifyUri, config)
      const status = res.status
      if (status === 200) {
        // localStorage.clear()
        history.push('/order-complete')
      } else {
        alert('Could not complete transaction')        
      }      
    } catch (error) {      
      toast.error("Could not complete transaction", {
        position: toast.POSITION.TOP_LEFT
      })
    }
  }

  const settings = {
    height: "1000px",
    width: "1000px"
  }

  const styling = {
    position: "absolute",
    top: 100,
    right: 250
  }

  return (
    <IframePage>
      <div>
        <FButton
          onClick={verifyPayment}
          >
          VERIFY PAYMENT
        </FButton>
      </div>
      <iframe
        {...settings}
        src={paymentUrl}>
      </iframe>

    </IframePage>
  )
}

export default PaymentPage