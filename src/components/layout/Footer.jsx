import React from 'react'

const Footer = () => {
                     
 return (
   <footer className="wow fadeInUp">        
      <div className="icons">
        <a href="https://instagram.com/check_adigs" target="_blank" rel="noreferrer" className="links">
          <i className="lab la-instagram" />
        </a>
        <a href="https://twitter.com/check_adigs" target="_blank" rel="noreferrer" className="links">
          <i className="lab la-twitter" />
        </a>
        <a href="https://www.facebook.com/Check_adigs-109195790858649" target="_blank" rel="noreferrer" className="links">
          <i className="lab la-facebook-f" />
        </a>       
      </div>
      <div className="text">
        <p>Powered by <span>Check Adigs</span></p> 
        {/* <img src="images/CA Logo.png" alt="logo" srcset=""> */}
      </div>
      <div className="phone">
        <a className="links" href="tel:+2348130267643">
          <i className="las la-phone" /><span>+2348130267643</span>
        </a>
      </div>
    </footer>
   )
}
export default Footer