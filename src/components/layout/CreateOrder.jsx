import React, { useState } from 'react'
import { useField } from '../../hooks/'
import SimpleNav from './SimpleNav'
import { BasicCard, Form, RowLayout } from "../StyledComponents";
import { Input } from '../StyledComponents'
// import InputField from '../forms/InputField'



const CreateOrder = () => {
  const firstName = useField('text')
  const lastName = useField('text')
  const email = useField('text')
  const phone = useField('number')
  const location = useField('text')

  return (
    <div>
      <SimpleNav />
      {/* <BasicCard> */}
        <Form>          
            <RowLayout>
            {/* <FormGroup> */}
              <Input 
                placeholder="First Name"
                onChange={firstName.onChange}
                value={firstName.value}
                />
            {/* </FormGroup> */}
            
            {/* <FormGroup>               */}
              <Input 
                className="push-left"
                placeholder="Last Name"
                onChange={lastName.onChange}
                value={lastName.value}
                />
            {/* </FormGroup> */}
            </RowLayout>

          {/* <FormGroup> */}
            <Input 
              placeholder="Email"
              onChange={email.onChange}
              value={email.value}
              />

          {/* </FormGroup> */}

          {/* <FormGroup> */}
            <Input 
              placeholder="Phone Number"
              onChange={phone.onChange}
              value={phone.value}
              />

          {/* </FormGroup> */}

          {/* <FormGroup> */}
            <Input 
              placeholder="Location"
              onChange={location.onChange}
              value={location.value}
              />

          {/* </FormGroup> */}

        </Form>


      
        
      {/* </BasicCard> */}
      
            
    </div>
  )
}

export default CreateOrder