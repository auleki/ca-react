import React from 'react'
import { useField } from '../../hooks/'
import SimpleNav from './SimpleNav'

const CreateOrder = () => {
  const firstName = useField('text')
  const lastName = useField('text')
  const email = useField('text')
  const phone = useField('number')
  const location = useField('text')

  
  return (
    <div>
      <SimpleNav />
      <form>
        <input type={firstName.type} placeholder="First Name"/>
        <input type={lastName.type} placeholder="Last Name"/>
        <input type={email.type} placeholder="Email"/>
        <input type={phone.type} placeholder="Phone Number"/>
        <input type={location.type} placeholder="Location"/>
      </form>
            
    </div>
  )
}

export default CreateOrder