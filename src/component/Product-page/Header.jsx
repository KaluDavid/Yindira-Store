import React from "react";
import img from "./Product-images/MagnifyingGlass.png";
import img2 from "./Product-images/UserCircle.png";
import img3 from "./Product-images/ShoppingCart.png";
import "./Product-Styles/header.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CartOverlay } from "./CartOverlay.jsx";
export function Header() {
  const [show, toggleShow] = useState(false);

  return (
    <header>
      <Link to="/">
        <h3 className="logo">yindira</h3>
      </Link>
      <nav>
        <Link to="/">
          <img src={img} alt="MagnifyingGlass" />
        </Link>
        <Link to="/checkOut">
          <img src={img2} alt="UserCircle" />
        </Link>

        {/* {show ?  : false} */}

        <p className="hide" onClick={() => toggleShow(!show)}>
          {show ? <img src={img3} alt="ShoppingCart"  />  : <img src={img3} alt="ShoppingCart"  />}
        </p>

        {show && <CartOverlay />}

      </nav>
    </header>
  );
}
