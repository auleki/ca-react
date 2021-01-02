import React from "react";
// import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import ShoppingBasketSharpIcon from "@material-ui/icons/ShoppingBasketSharp";
import { FButton } from "../StyledComponents";

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

        {/* <ul className="navbar">
           
          </ul> */}

        <div className="side-links">
          <Link to="/quiz">
            <FButton className="discard">Q</FButton>
          </Link>

          <Link className="link-button" to="/shopping">
            <ShoppingBasketSharpIcon />
            <span className="badge">{items}</span>
          </Link>
        </div>
      </nav>
    </>
  );
};
export default SimpleNav;
