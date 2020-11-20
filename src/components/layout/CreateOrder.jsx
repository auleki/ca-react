import React, { useState } from 'react'
import axios from 'axios'
import { useField } from '../../hooks/'
import SimpleNav from './SimpleNav'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';


import { 
  BasicCard, 
  Form, 
  RowLayout, 
  SubTitle,
  Paragraph, 
  Title,
  Input,
  Button,
  SummaryHeader,
  SummaryCard } from "../StyledComponents";
import { formatToComma } from "../../api/operationsAPI";
// import { ArrowForward } from '@material-ui/icons'

const CreateOrder = () => {
  const firstName = useField('text')
  const lastName = useField('text')
  const email = useField('text')
  const phone = useField('number')
  const location = useField('text')

  const { cartItems, price } = useSelector(state => state.cart)  

  const GOLDEN = 'sk_test_a3150b31e7a217d2488132a436e6df8d28dec651'

  const returnToken = token => `Bearer ${token}`
  
  const makeOrder = async(e) => {
    
    e.preventDefault()
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
      orderNumber: "0FEPLIXIG871C"
    }
    
    // make api call to paystack
    let baseUrl = 'https://api.paystack.co/transaction/initialize'
    
    const paystackLoad = {
      amount: "200000",
      email: "customer@email.com",
      // reference: "XXXREF"
    }
    
    const currentToken = returnToken(GOLDEN)
    
    const config = {
      headers: { Authorization: currentToken }
    }
    const result = await axios.post(baseUrl, paystackLoad, config)
    
    console.log(result);
    let tRef
    
    if (result.status === 200) {
      tRef = result.data.data.reference
      console.log(`Transaction successful for ${tRef}`)
      console.log("DB LOAD:",dbLoad)
    } else {
      console.log("Transaction failed " + firstName.value + ' please try again')
    }
    
    // if transaction successful, then we save new order to database
    //else we tell user transaction failed and have them try again
    
  
    
    // verify transaction

  }



  return (
    <div>
      <SummaryHeader>
        <Title>Confirm order and pay</Title>
        <Paragraph>
          Once payment is confirmed, we call to confirm then we dispatch your order. All under 2 hours.

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
                required
                />
                        
              <Input
                placeholder="Last Name"
                onChange={lastName.onChange}
                value={lastName.value}
                required
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
              Confirm Order            
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
      
            
    </div>
  )
}

export default CreateOrder