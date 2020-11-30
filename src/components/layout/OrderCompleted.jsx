import React from 'react'
import { Link } from 'react-router-dom'
import { Page, SuccessCard, Title, Paragraph, FButton } from "../StyledComponents";

const OrderCompleted = () => {
  return (
    <SuccessCard>
      <Title>Congrats!</Title>
      <Paragraph>
        Your order has been received, we will be in touch
        </Paragraph>
      <Link to="/">
        <FButton primary>
          Return to Shop
        </FButton>
      </Link>
    </SuccessCard>
  )
}

export default OrderCompleted