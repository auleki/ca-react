import React from 'react'

const SubscribeForm = () => {
                     
 return (
   <div className="newsletter wow fadeInRightBig">
      <h3>Subscribe to get on our mailing list</h3>
      <div className="subscribe">
        <form id="subscribeForm">
          <div className="form_group">
            <span className="placeholder">@</span>
            <input type="email" name="email" id="email" placeholder="type in your email address" autoComplete="off" />
            <button type="submit" id="subscribeBtn" className="send"><ion-icon name="enter-outline" /></button>
          </div>
        </form>        
      </div>
    </div>
   )
}
export default SubscribeForm