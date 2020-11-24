import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useField } from '../../hooks/'
import SimpleNav from './SimpleNav'
import { generateId } from '../../services/idGen'
import { useDispatch, useSelector } from 'react-redux'
import {
  BasicCard,
  Form,
  RowLayout,
  SubTitle,
  Paragraph,
  Title,
  Input,
  Button,
  FButton,
  SummaryHeader,
  SummaryCard,
  Page
} from "../StyledComponents";
import { formatToComma } from "../../api/operationsAPI";
// import { ArrowForward } from '@material-ui/icons'

const CreateOrder = () => {
  const firstName = useField('text')
  const lastName = useField('text')
  const email = useField('text')
  const phone = useField('number')
  const location = useField('text')
  const [ordered, setOrdered] = useState(false)
  const [reference, setReference] = useState('')

  // const uuid = uuidv4()

  
  useEffect(() => {
    window.scrollTo(0, 0);    
  }, [])
  
  const { cartItems, price } = useSelector(state => state)

  const GOLDEN = 'sk_test_a3150b31e7a217d2488132a436e6df8d28dec651'

  const returnToken = token => `Bearer ${token}`

  const vuid = generateId().toUpperCase()

  // speak to paystack API  
  const makeOrder = async (e) => {
    e.preventDefault()
    setOrdered(true)
    let tRef, paymentUrl
    // uid = nanoid().toLocaleUpperCase()
    // create order object for db
    const dbLoad = {
      products: cartItems,
      userInfo: {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        location: location.value
      },
      discountCode: null,
      orderNumber: `${vuid}CA`
    }

    // make api call to paystack
    let baseUrl = 'https://api.paystack.co/transaction/initialize'

    const paystackLoad = {
      amount: 5000,
      email: "customer@email.com",
    }

    const currentToken = returnToken(GOLDEN)
    const config = {
      headers: { Authorization: currentToken }
    }
    const result = await axios.post(baseUrl, paystackLoad, config)

    console.log(result)

    paymentUrl = result.data.data.authorization_url

    console.log(paymentUrl)
    // console.log(vuid)

    if (result.status === 200) {
      tRef = result.data.data.reference
      console.log(`Transaction successful for ${tRef}`)
      console.log("DB LOAD:", dbLoad)
      setReference(tRef)
      window.open(paymentUrl)
    } else {
      console.log("Transaction failed " + firstName.value + ' please try again')
    }
    // if transaction successful, then we save new order to database
    //else we tell user transaction failed and have them try again
    // verify transaction

  }

  const verifyPayment = async () => {
    const verifyUri = `https://api.paystack.co/transaction/verify/${reference}`
    const currentToken = returnToken(GOLDEN)
    const config = {
      headers: { Authorization: currentToken }
    }
    const res = await axios.get(verifyUri, config)
    console.log(res)
    
  }


  

  return (
    <Page>
      <SummaryHeader>
        <Title>Confirm order and pay</Title>
        <Paragraph>
          A new window will be opened for you to pay, come back here to verify your payment
        </Paragraph>
      </SummaryHeader>

      <BasicCard>
         {ordered 
          ? <FButton onClick={verifyPayment}>
              Verify Order
            </FButton>
          : <Form onSubmit={makeOrder}>
          <SubTitle uppercase>
            PAYMENT INFO
          </SubTitle>

          <RowLayout>

            <Input
              placeholder="First Name"
              onChange={firstName.onChange}
              value={firstName.value}
            // required
            />

            <Input
              placeholder="Last Name"
              onChange={lastName.onChange}
              value={lastName.value}
            // required
            />

          </RowLayout>

          <Input
            placeholder="Email"
            onChange={email.onChange}
            value={email.value}
          />

          <Input
            placeholder="Phone Number"
            onChange={phone.onChange}
            value={phone.value}
          />

          <Input
            placeholder="Location"
            onChange={location.onChange}
            value={location.value}
          />

          <div>
            <Button primary>
              Pay for order
            </Button>              
          </div>

        </Form>}


        <SummaryCard>
          <h3>You are to pay</h3>
          <p className="totalPrice">
            <span>N</span>{formatToComma(price)}
          </p>
          <p className="info">
            You have selected {cartItems.length} product(s)
          </p>
        </SummaryCard>
      </BasicCard>


    </Page>
  )
}

export default CreateOrder