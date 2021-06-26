import React, { useState } from 'react'
import NavigationIcon from '@material-ui/icons/Navigation'
import MailIcon from '@material-ui/icons/Mail'
import { addSubscriber } from '../../services/operations'
// import { SubscribeInput } from "../StyledComponents";
import { ToastContainer } from 'react-toastify'

const SubscribeSuccess = () => {
  return (
    <div className='newsletter wow fadeInRightBig'>
      <div className='success-message'>
        <h3 className='light'>Thanks for trusting us</h3>
        <p className='light'>
          You have successfully subscribed to our mailing list
        </p>
      </div>
    </div>
  )
}

const SubscribeForm = ({ setSubscribed, subscribed }) => {
  const [email, setEmail] = useState('')

  const saveSubscriber = async e => {
    e.preventDefault()
    try {
      const subscriberInfo = {
        source: 'homepageForm',
        email
      }
      const savedSubscriber = await addSubscriber(subscriberInfo)
      console.log('User to be added: ', savedSubscriber)
      setSubscribed(!subscribed)
    } catch (error) {}
  }

  const handleInput = e => setEmail(e.target.value)

  return (
    <div className='newsletter wow fadeInRightBig'>
      <ToastContainer position='bottom-center' />
      <div className='subscribe_title'>
        <h3 className='light'>Subscribe to our mailing list</h3>
      </div>
      <div className='subscribe'>
        <form id='subscribeForm' onSubmit={saveSubscriber}>
          <div className='form_group'>
            <span className='placeholder'>
              <MailIcon />
            </span>
            <input
              type='email'
              value={email}
              onChange={handleInput}
              required
              placeholder='type in your email address'
              autoComplete='off'
            />
            <button type='submit' id='subscribeBtn' className='send'>
              {/* <ion-icon name="enter-outline" /> */}
              <NavigationIcon className='flip' />
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
      {subscribed ? (
        <SubscribeSuccess />
      ) : (
        <SubscribeForm setSubscribed={setSubscribed} subscribed={subscribed} />
      )}
    </>
  )
}
export default SubscribeView
