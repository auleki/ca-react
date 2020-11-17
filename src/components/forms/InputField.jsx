import React from 'react'

const InputField = ({ placeholder, type, value, onChange }) => {
  
  return (
    <input 
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      />
  )
}

export default InputField