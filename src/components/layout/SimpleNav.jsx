import React from "react";
// import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import { Link } from "react-router-dom";
import HelpIcon from '@material-ui/icons/Help';
import { useSelector } from "react-redux";
import ShoppingBasketSharpIcon from "@material-ui/icons/ShoppingBasketSharp"
import MoreVertIcon from '@material-ui/icons/MoreVert'
import MenuIcon from '@material-ui/icons/Menu';
import { FButton, LinkButton } from "../StyledComponents";

const SimpleNav = () => {
  const items = useSelector((state) => state.items);

  return (
    <>
      <nav className="wow fadeInDown">
        <div className="logo">
          <Link to="/">
            <h1 className="text">CHECKADIGS</h1>
          </Link>
        </div>
        {/* TAKE LINKS OUT OF NAVBAR LATER */}

         {/* <ul className="navbar"> */}
          {/* </ul>  */}
          <div className="nav-links">
            <Link to="/admin" className="nav-link">
              <FButton>
                ADMIN
              </FButton>
            </Link>

            <Link to="/quiz" className="nav-link">
              <FButton>
                Quiz
              </FButton>
            </Link>
          <div className="cart-icon">
            <Link className="link-button" to="/shopping">
                <ShoppingBasketSharpIcon />
                <span className="badge">{items}</span>
            </Link>
           </div>
          </div>
          {/* <FButton className="mobile-menu">
            <MenuIcon />
          </FButton> */}
      </nav>
    </>
  );
};
export default SimpleNav;
