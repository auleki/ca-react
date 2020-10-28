import React from 'react'

const Header = () => {
                     
 return (
   <header className="wow fadeInDownBig">
          {/* <div class="header"> */}
          {/* <div class="logo">
            <img src="images/CA Logo.png" alt="logo">
        </div> */}
          <div className="left">
            <h1>We are live!</h1>
            <div className="paras">
              <p>Place your orders now via Whatsapp</p>
              {/* <p class="center">OR</p> */}
              {/* <p>Win something by partaking in our giveaway quiz</p> */}
            </div>
            <div className="actions">
              <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi%20there%20Checkadigs,%20I'd%20love%20to%20make%20a%20purchase" className="order-button" target="_blank" rel="noreferrer">
                <span>Place Order</span><i className="lab la-whatsapp" />
              </a>
              <a href="./quiz.html" className="out-button">
                <span>Giveaway Quiz</span>
              </a>
            </div>
          </div>
          
          <div className="point">
            <i id="word" className="las la-angle-double-down" />
          </div>
        </header>
   )
}
export default Header