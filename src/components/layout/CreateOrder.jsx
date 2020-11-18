import React, { useState } from 'react'
import { useField } from '../../hooks/'
import SimpleNav from './SimpleNav'
import { 
  BasicCard, 
  Form, 
  RowLayout, 
  CardStyle, 
  SummaryCard } from "../StyledComponents";
import { Input } from '../StyledComponents'
// import InputField from '../forms/InputField'



const CreateOrder = () => {
  const cardNumber = useField('number')
  const expiryDate = useField('date')
  const cvv = useField('number')
  const firstName = useField('text')
  const lastName = useField('text')
  const email = useField('text')
  const phone = useField('number')
  const location = useField('text')

  return (
    <div>
      <SimpleNav />
      <BasicCard shadow>
        <Form> 
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

        </Form>
        

        <SummaryCard>
          <h3>You are to pay</h3>
          <p className="totalPrice">
            N45,000
          </p>
          <p className="info">
            You have selected 13 items 
          </p>
        </SummaryCard>
      </BasicCard>
      
            
    </div>
  )
}

export default CreateOrder