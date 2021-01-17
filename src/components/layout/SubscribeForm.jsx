import React, { useState } from 'react'
import NavigationIcon from '@material-ui/icons/Navigation';
import MailIcon from '@material-ui/icons/Mail';
import { addSubcriber } from "../../services/operations";
import { SubscribeInput } from "../StyledComponents";

const SubscribeSuccess = () => {

  return (
    <div className="newsletter wow fadeInRightBig">
      <h3 className="light">
        You have successfully subscribed to your mailing list
      </h3>
      <p>Thanks for trusting us</p>
    </div>
  )
}


const SubscribeForm = ({ setSubscribed, subscribed }) => {
  const [email, setEmail] = useState('')

  const saveSubscriber = async (e) => {
    e.preventDefault()
    // const savedSubscriber = await addSubcriber(email)
    setSubscribed(!subscribed)
    return 
  }

  const handleInput = e => setEmail(e.target.value)

  return (
    <div className="newsletter wow fadeInRightBig">
      <h3 className="light">Subscribe to get on our mailing list</h3>
      <div className="subscribe">
        <form id="subscribeForm" onSubmit={saveSubscriber}>
          <div className="form_group">
            <span className="placeholder"><MailIcon /></span>
            <input
              type="email"
              value={email}
              onChange={handleInput}
              required
              placeholder="type in your email address"
              autoComplete="off" />
            <button type="submit" id="subscribeBtn" className="send">
              {/* <ion-icon name="enter-outline" /> */}
              <NavigationIcon className="flip" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

const SubscribeView = () => {
  const [subscribed, setSubscribed] = useState(false)
  return (
    <>
      {subscribed
        ? <SubscribeSuccess/>
        : <SubscribeForm 
            setSubscribed={setSubscribed} 
            subscribed={subscribed} />}
    </>
  )
}
export default SubscribeView