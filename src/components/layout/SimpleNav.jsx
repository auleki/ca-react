import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ShoppingBasketSharpIcon from '@material-ui/icons/ShoppingBasketSharp'
import MenuIcon from '@material-ui/icons/Menu'
import { FButton } from '../StyledComponents'

const SimpleNav = () => {
  const items = useSelector(state => state.items)
  const [openNav, setOpenNav] = useState(false)
  const handleClick = () => setOpenNav(!openNav)
  const closeMenu = () => setOpenNav(false)

  return (
    <>
      <nav className={`wow fadeInDown`}>
        <div className='logo' onClick={closeMenu}>
          <Link to='/'>
            <h1 className='text'>CHECKADIGS</h1>
          </Link>
        </div>
        <div className={`nav-links ${openNav ? 'active' : ''}`}>
          <Link to='/quiz' className='nav-link' onClick={closeMenu}>
            QUIZ
          </Link>
          <Link to='/about' className='nav-link' onClick={closeMenu}>
            ABOUT US
          </Link>
          <div className='cart-icon'>
            <Link className='link-button' to='/shopping'>
              <ShoppingBasketSharpIcon />
              <span className='badge'>{items}</span>
            </Link>
          </div>
        </div>
        <div className='mobile-menu'>
          <FButton onClick={handleClick}>
            <MenuIcon />
          </FButton>
        </div>
      </nav>
    </>
  )
}
export default SimpleNav
