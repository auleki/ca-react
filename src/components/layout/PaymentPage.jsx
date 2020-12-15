import React, { useEffect } from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { FButton } from "../StyledComponents";
import { IframePage, IframeStyle } from "../StyledComponents";
import { returnToken } from "../../services/operations";
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

const PaymentPage = () => {    
  const data = localStorage.getItem("payInfo")
  const history = useHistory()
  // eslint-disable-next-line
  const { paymentUrl, tRef } = JSON.parse(data)
  const GOLDEN = process.env.REACT_APP_PS_SK

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  // toast function
  const errorAlert = (msg) => toast.error(msg)
  
  //verfify payment
  const verifyPayment = async () => {
    try {
      // Our messiah
      // const messiah = "9ndpponcu3"
      // const messiah = "oveuufnxvl"
      const verifyUri = `${process.env.REACT_APP_PS_VERIFY}/${tRef}`
      const currentToken = returnToken(GOLDEN)
      const config = {
        headers: { Authorization: currentToken }
      }
      const res = await axios.get(verifyUri, config)
      const status = res.data.data.status

      if (status === 'success') {
        history.push('/order-complete')
      } else {
        errorAlert(`Transaction ${status}, payment not made`)
      }      
    } catch (error) {      
      errorAlert("Could not verify transaction, check your internet connection") 
    }
  }

  const settings = {
    height: "1000px",
    width: "1000px"
  }
  
  return (
    <IframePage>
      <div>
        <FButton
          onClick={verifyPayment}
          >
            <span>Verify Payment</span> <CheckCircleIcon />
        </FButton>
        <ToastContainer/>
      </div>
      <IframeStyle {...settings} src={paymentUrl}>

      </IframeStyle>

    </IframePage>
  )
}

export default PaymentPage