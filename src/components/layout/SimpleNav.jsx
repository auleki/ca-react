import React, { useState, useEffect } from 'react'
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import { Link } from 'react-router-dom'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { useSelector } from 'react-redux'
import ShoppingBasketSharpIcon from '@material-ui/icons/ShoppingBasketSharp';

// import CartIcon from '../../cart-01.svg'

const SimpleNav = () => {
  const items = useSelector(state => state.items)
  // const [itemCount, setItemCount] = useState(0)
  
  // const [isAdmin, setIsAdmin] = useState(admin)

  // useEffect(() => {
  //   setItemCount(items)
  // }, [items])

 return (
    <>
      <nav className="wow fadeInDown">
          <div className="logo">
            {/* <img src="images/CA Logo.png" alt="logo"> */}
            <Link to="/">
              <h1 className="text">CHECKADIGS</h1>
            </Link>
          </div>
          {/* <div className="hamburger">            
            <MenuRoundedIcon />
          </div> */}
          <div>
            {/* <CartIcon /> */}
          </div>
          <ul className="navbar">
            {/* <li className="dropdown">
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
            </li> */}
            {/* <li><a href="" class="links">About Us</a></li> */}


            {/* Reactivate Quiz Link Here  */}
            {/* <li><a href="quiz.html" className="links quiz">Quiz</a></li> */}




            {/* <li><a href="#aboutUs" className="links contact">About Us</a></li> */}
            
              {/* <a className="link-button" href="/shopping-cart">
                <ShoppingBasketSharpIcon/>
                <span className="badge">0</span>
              </a> */}
          </ul>
          
          <Link className="link-button" to="/shopping">
                <ShoppingBasketSharpIcon/>
              <span className="badge">{items}</span>
          </Link>
        </nav>
    </>
   )
}
export default SimpleNav