import React, { useState } from 'react'
import { useField } from '../../hooks/'
import SimpleNav from './SimpleNav'
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
  SummaryHeader,
  SummaryCard } from "../StyledComponents";
import { formatToComma } from "../../api/operationsAPI";

const CreateOrder = () => {
  const firstName = useField('text')
  const lastName = useField('text')
  const email = useField('text')
  const phone = useField('number')
  const location = useField('text')

  const { cartItems, price } = useSelector(state => state.cart)  

  const makeOrder = async (cartItems, price) => {
    // order object for database
    const newOrder = {}

    const baseUrl = `https://api.paystack.co/transaction/initialize`
      
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
        <Form> 
          <SubTitle uppercase>
            PAYMENT INFO
          </SubTitle>

            <RowLayout>
            
              <Input 
                placeholder="First Name"
                onChange={firstName.onChange}
                value={firstName.value}
                />
                        
              <Input
                placeholder="Last Name"
                onChange={lastName.onChange}
                value={lastName.value}
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
            <Button onClick={makeOrder} primary>
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