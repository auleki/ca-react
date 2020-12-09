import React, { useEffect } from 'react'
import axios from 'axios'
import { useField } from '../../hooks/'
import { useHistory } from "react-router-dom";
import { generateId } from '../../services/idGen'
import { useSelector } from 'react-redux'
import { saveOrder } from "../../services/operations";
import {
  BasicCard,
  Form,
  RowLayout,
  SubTitle,
  Paragraph,
  Title,
  Input,
  Button,
  // FButton,
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
  // eslint-disable-next-line
  // const [ordered, setOrdered] = useState(false)
  // eslint-disable-next-line
  // const [reference, setReference] = useState('')
  const history = useHistory()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const { cartItems, price } = useSelector(state => state)

  // eslint-disable-next-line
  function openNewTab(url) {
    const win = window.open(url, '_blank')
    win.focus()
  }

  function saveUrlToStorage(load, key) {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key)
      localStorage.setItem(key, JSON.stringify(load))
    } else {
      JSON.stringify(load)
      localStorage.setItem(key, JSON.stringify(load))
    }
  }


  const GOLDEN = process.env.REACT_APP_PS_SK
  // console.log(GOLDEN)

  const vuid = generateId().toUpperCase()

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
    orderNumber: `${vuid}CA`,
    price,
  }

  const returnToken = token => `Bearer ${token}`

  // speak to paystack API  
  const makeOrder = async (e) => {
    e.preventDefault()
    let tRef, paymentUrl
    // let baseUrl = 'https://api.paystack.co/transaction/initialize'
    let baseUrl = process.env.REACT_APP_PS_INIT

    //TODO ADJUST PAYSTACK LOAD IN PRODUCTION
    // const padPrice = parseInt(`${price}00`)
    // console.log("email", email.value)
    // const paystackLoad = {
    //   amount: padPrice,
    //   email: email.value,
    // }
    const paystackLoad = {
      amount: 10000,
      email: email.value,
    }
    console.log("CHECK PRICE: ", price)
    const currentToken = returnToken(GOLDEN)

    try {
      const config = {
        headers: { Authorization: currentToken }
      }
      // console.log("CURRENT TOKEN: ", currentToken)
      const result = await axios.post(baseUrl, paystackLoad, config)
      console.log("INIT OBJs", result)
      paymentUrl = result.data.data.authorization_url
      tRef = result.data.data.reference
      const payInfo = { paymentUrl, tRef, orderNumber: dbLoad.orderNumber }
      if (result.status === 200) {
        // save to database
        saveOrder(dbLoad)
          .then(data => data)
          .catch(e => console.log(e))
        // console.log(`Transaction successful for ${tRef}`)
        console.log("DB LOAD:", dbLoad)
        // openNewTab(paymentUrl)
        saveUrlToStorage(payInfo, "payInfo")
        history.push("/payment")
      } else {
        console.log("Transaction failed " + firstName.value + ' please try again')
      }
    } catch (error) {
      console.log("WE HAVE A PROBLEM")
      console.log(error.message)
      console.log("-------------------")
    }
    // if transaction successful, then we save new order to database
    //else we tell user transaction failed and have them try again
    // verify transaction
  }


  return (
    <div className="full">
      <Page>
        <SummaryHeader>
          <Title>Confirm order and pay</Title>
          <Paragraph>
            A new window will be opened for you to pay, come back here to verify your payment
        </Paragraph>
        </SummaryHeader>

        <BasicCard>

          <Form onSubmit={makeOrder}>
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
              required
            />

            <Input
              placeholder="Phone Number"
              onChange={phone.onChange}
              value={phone.value}
            // required
            />

            <Input
              placeholder="Location"
              onChange={location.onChange}
              value={location.value}
            // required
            />

            <div>
              <Button primary>
                Pay for order
              </Button>
            </div>

          </Form>

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
    </div>

  )
}

export default CreateOrder