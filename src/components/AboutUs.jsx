import { Container, Paragraph, SubTitle, Title } from './StyledComponents'
import { color } from './constants'

const AboutUs = () => {
  return (
    <Container>
      <div className="header">
        <Title bold uppercase size={4}>About Us</Title>
        {/* <section className="image">
          <h1>IMAGE</h1>
        </section>
        <section className="text">
          <Paragraph size={1.9} fontColor={color.white}>
            
          </Paragraph>
        </section> */}
      </div>

      <div className="aboutUs">
        <div className="content">
          <div className="title">
            <h2>FROM THE EVERYDAY TO THE EXTRAORDINARY, WE BELIEVE IN DESIGNING THE FINEST CLOTHES TO EQUIP YOUR JOURNEY.</h2>
          </div>
          <p>
            Welcome to Check Adigs, your number one source for online clothing. 
            We're dedicated to giving you the very best of clothing with a 
            focus on durability,  exceptional customer service and uniqueness. 
            Founded in 2020 by Adigun Kehinde and his cofounder Omoya Oluwatimilehin.             
          </p>
          <p>
            Check Adigs has come a long way from it's humble beginnings in Lagos, Nigeria. 
            When Adigun Kehinde and Omoya Oluwatimilehin started out, their passion 
            for creativity led to designs that connect and create bonds between 
            them and their customers. 
          </p>

          <p>
            At Check Adigs we give a sense of total package with highly
            rated quality, superior, and excellent products.
            Check Adigs now serve customers around the world, we continue to make our customers
            feel confident, smart, attractive and fashion sound, join the trend, place your order
          </p>

        </div>
        <section className="more">
          <SubTitle bold size={1.5}>PRODUCTS AND SERVICES</SubTitle>  
          <p>
            Check Adigs offers a <span className="special">unisex</span> clothing line that is exquisite and sophisticated, as well as practical and wearable.
            We offer a full range collection where each piece is special individually and provides chic and effortless style. We create inimitable pieces that can be worn for years, combined with basics or trends.          
            </p>
            <p>
              Our primary concern is ensuring our customers are happy with the style and fit of their purchase. We provide products tailored to all shapes and styles.
              Every piece in our collection is made to serve as your trusted companion through a lifetime of experience.              
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