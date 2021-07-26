import React, { useState } from 'react'
import { ParentContainer } from './StyledComponents'

// https://tariqul-islam-rony.medium.com/multiple-checkbox-handling-by-react-js-84b1d49a46c6

const CheckBox = ({ id, onChange, isChecked, value }) => {
  // console.log('Passed Properties? 1', props)
  return (
    <input
      className='checkbox'
      key={id}
      onClick={onChange}
      type='checkbox'
      checked={isChecked}
      value={value}
    />
  )
}

const Experiment = () => {
  const [checked, setChecked] = useState({
    checkedItems: new Map()
  })

  const fruits = [
    { id: 1, value: 'banana', isChecked: false },
    { id: 2, value: 'apple', isChecked: true },
    { id: 3, value: 'mango', isChecked: true },
    { id: 4, value: 'grape', isChecked: false }
  ]

  const acceptChange = e => {
    const item = e.target.value
    const isChecked = e.target.checked
    console.log(item, ':', isChecked)
    console.log('Current State', checked)
    setChecked({ checkedItems: checked.checkedItems.set(item, !isChecked) })
  }

  return (
    <ParentContainer>
      <h1> Check and Uncheck All Example </h1>
      <div className='checkboxes'>
        <input
          className='checkbox'
          type='checkbox'
          // onClick={handleAllChecked}
          value='checkedall'
        />{' '}
        <span className='check_text'>Check / Uncheck All</span>
      </div>
      <ul className='checkboxes'>
        {fruits.map(fruit => (
          <label htmlFor={fruit.id} key={fruit.id}>
            {fruit.value}
            <CheckBox
              {...fruit}
              onChange={acceptChange}
              checked={checked.checkedItems.get(fruit.value)}
            />
          </label>
        ))}
      </ul>
    </ParentContainer>
  )
}

export default Experiment
