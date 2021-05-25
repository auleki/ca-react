import { Container, Paragraph } from './StyledComponents'
import { color } from './constants'

const AboutUs = () => {
  return (
    <Container>
      <div className="header">
      <section className="image">
        <h1>IMAGE</h1>
      </section>
      <section className="text">
        <Paragraph size={1.9} fontColor={color.white}>
          Check Adigs offers a <span className="special">unisex</span> clothing line that is exquisite 
          and sophisticated, as well as 
          practical and wearable.
        </Paragraph>
      </section>
      </div>
    </Container>
  )
}

export default AboutUs