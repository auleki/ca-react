import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    Header,
    ClothListings,
    SubscribeForm
} from './index'

const MobileCartIcon = () => {

    const { cartItems } = useSelector(state => state)
    
    return (
        <>

        <Link to="/shopping">
            <div className="mobile-cart-icon">
                <h2>{ cartItems.length }</h2>
            </div>
        </Link>

        </>
    )
}

const Homepage = () => {

    return (
        <>
            <Header />
            <ClothListings />
            <MobileCartIcon/>
            <SubscribeForm />
        </>
    )
}
export default Homepage