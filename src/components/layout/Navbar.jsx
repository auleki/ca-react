import React, { useState } from 'react'
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

import ShoppingBasketSharpIcon from '@material-ui/icons/ShoppingBasketSharp';

import CartIcon from '../../cart-01.svg'

const Navbar = ({ admin }) => {

  // const [isAdmin, setIsAdmin] = useState(admin)

 return (
    <>
      <nav className="wow fadeInDown">
          <div className="logo">
            {/* <img src="images/CA Logo.png" alt="logo"> */}
            <a href="/">
              <h1 className="text">CHECKADIGS</h1>
            </a>
          </div>
          <div className="hamburger">
            <ion-icon name="menu-outline" />
          </div>
          <div>
            {/* <CartIcon /> */}
          </div>
          <ul className="navbar">
            <li className="dropdown">
              <a href="#" className="links dropbtn">
                Categories
                <ion-icon name="caret-down-outline" />
              </a>
              <ul className="dropdown_menu">
                <li><a href="#genesis" className="menu_items">Sweatshirt</a></li>
                <li><a href="#polos" className="menu_items">Poloshirts</a></li>
                <li><a href="#shorts" className="menu_items">Shorts</a></li>
                <li><a href="#tShirt" className="menu_items">T-shirts</a></li>
                <li><a href="#joggers" className="menu_items">Joggers</a></li>
              </ul>
            </li>
            {/* <li><a href="" class="links">About Us</a></li> */}
            <li><a href="quiz.html" className="links quiz">Quiz</a></li>
            <li><a href="#aboutUs" className="links contact">About Us</a></li>
          </ul>
          <ShoppingBasketSharpIcon/>
        </nav>
    </>
   )
}
export default Navbar