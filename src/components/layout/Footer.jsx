import React from 'react'
// import SendSharpIcon from '@material-ui/icons/SendSharp';
import TwitterIcon from '@material-ui/icons/Twitter';
import PhoneIcon from '@material-ui/icons/Phone';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {

  return (
    <footer className="wow fadeInUp">
      <div className="icons">
        <a href="https://instagram.com/check_adigs" target="_blank" rel="noreferrer noopener" className="links">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com/check_adigs" target="_blank" rel="noreferrer noopener" className="links">

          <TwitterIcon />
        </a>
        <a href="https://www.facebook.com/Check_adigs-109195790858649" target="_blank" rel="noreferrer noopener" className="links">

          <FacebookIcon />
        </a>
      </div>
      <div className="text">
        <p>Powered by <span>Check Adigs</span></p>
      </div>
      <div className="phone">
        <a className="links" href="tel:+2348130267643">
          
          <PhoneIcon /><span>+2348130267643</span>
        </a>
      </div>
    </footer>
  )
}
export default Footer