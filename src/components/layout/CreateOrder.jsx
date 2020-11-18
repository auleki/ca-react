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
  const cardNumber = useField('number')
  const expiryDate = useField('date')
  const cvv = useField('number')
  const firstName = useField('text')
  const lastName = useField('text')
  const email = useField('text')
  const phone = useField('number')
  const location = useField('text')

  const { cartItems, price } = useSelector(state => state.cart)  

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
              placeholder="Date card expires"
              value={expiryDate.value}
              onChange={expiryDate.onChange}
              type={expiryDate.type}
              />
                      
            <Input 
              placeholder="CVV"
              onChange={cvv.onChange}
              value={cvv.value}
              type={cvv.type}
              />

            
            </RowLayout>         
                <Input 
                  placeholder="Card Number"
                  onChange={cardNumber.onChange}
                  type={cardNumber.type}
                  value={cardNumber.value}
                  />
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
            You have selected {cartItems.length} clothes
          </p>
        </SummaryCard>
      </BasicCard>
      
            
    </div>
  )
}

export default CreateOrder