import React, { useState } from 'react'
import { useField } from '../../hooks/'
import SimpleNav from './SimpleNav'
import { BasicCard } from "../StyledComponents";
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
      <BasicCard>
        <form>
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

        </form>
      </BasicCard>
      
            
    </div>
  )
}

export default CreateOrder