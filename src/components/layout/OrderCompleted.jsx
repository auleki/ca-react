import React from 'react'
import { Page, SuccessCard, Title, Paragraph, FButton } from "../StyledComponents";

const OrderCompleted = () => {
  return (
      <SuccessCard>
        <Title>Congrats!</Title>
        <Paragraph>
          Your order has been received, we will be in touch
        </Paragraph>
        <FButton primary>
          Return to Shop
        </FButton>
      </SuccessCard>    
  )
}

export default OrderCompleted