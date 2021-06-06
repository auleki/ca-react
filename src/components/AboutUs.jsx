import React, { useRef, useEffect, forwardRef, useLayoutEffect, useState } from 'react'
import { 
  Container, 
  Paragraph, 
  SubTitle, 
  Title, 
  Button, 
  Input, 
  RowLayout } from './StyledComponents'
import { color, fonts } from './constants'
// import { createRef } from 'react'

const CountdownTimer = () => {
  const [num, setNum] = useState(100)
  const [pause, setPause] = useState(false)

  const intervalRef = useRef()

  const decreaseNum = () => setNum((prev) => prev - 1)

  function handleClick () {
    // console.log('action pending...')
    if (!pause) {
      clearInterval(intervalRef.current)
    } else {
      intervalRef.current = setInterval(decreaseNum, 1000)
    }
    setPause((prev) => !prev)
  }

  useEffect(() => {
    setPause(false)
    intervalRef.current = setInterval(decreaseNum, 1000)
    return () => clearInterval(intervalRef.current)
  }, [])
  
  return (
    <div>
      <h2>{num}</h2>
      <button primary onClick={handleClick}>{pause ? "Run" : "Pause"}</button>
    </div>
  )
}

const AboutUs = () => {
  
  return (
    <Container>
      {/* <CountdownTimer />
      <div>
        <h2>HEY</h2>
      </div> */}
      
      <div className="header">
        <Title bold textFont={fonts.main} uppercase size={4}>About Us</Title>
      </div>

      <div className="aboutUs">
        <div className="content">
          <div className="title">
            <h2>OUR MISSION</h2>
            {/* <h2>FROM THE EVERYDAY TO THE EXTRAORDINARY, WE BELIEVE IN DESIGNING THE FINEST CLOTHES TO EQUIP YOUR JOURNEY.</h2> */}
          </div>
          <p>
            Welcome to Check Adigs, your number one source for online clothing. 
            We're dedicated to giving you the very best of clothing with a 
            focus on durability, exceptional customer service and uniqueness. 
            Founded in 2020 by Adigun Kehinde and his cofounder Omoya Oluwatimilehin.             
          </p>
          <p>
            Check Adigs has come a long way from it's humble beginnings in Lagos, Nigeria. 
            When Adigun Kehinde and Omoya Oluwatimilehin started out, their passion 
            for creativity led to designs that connect and create bonds between them and their customers. At Check Adigs we give a sense of total package with highly
            rated quality, superior, and excellent products.
            Check Adigs now serve customers around the world, we continue to make our customers feel confident, smart, attractive and fashion sound, join the trend, place your order
          </p>

        </div>
        <section className="more">
          <h2>PRODUCTS AND CULTURES</h2>  
          <p>
            Check Adigs offers a <span className="special">unisex</span> clothing line that is exquisite and sophisticated, as well as practical and wearable.
            We offer a full range collection where each piece is special individually and provides chic and effortless style. We create inimitable pieces that can be worn for years, combined with basics or trends. Our primary concern is ensuring our customers are happy with the style and fit of their purchase. We provide products tailored to all shapes and styles. Every piece in our collection is made to serve as your trusted companion through a lifetime of experience.                               
            </p>
            <p>
              Styles: As we recognise the need for styles that are always available, we offer a large variety of styles that are standard and continually available. We cater for clients who require a customized option designed for their corporate identity requirement. 
            </p>
            <p>
              Fabrics: Our fabrics are of premium blends which are durable and appropriate for everyday use. We use beautifully coloured natural fabrics with wrinkle resistant qualities. They are machine washable  and easy to care for.
            </p>
        </section>
      </div>
    </Container>
  )
}

export default AboutUs