import React from "react";
import img from "./Product-images/MagnifyingGlass.png";
import img2 from "./Product-images/UserCircle.png";
import img3 from "./Product-images/ShoppingCart.png";
import "./Product-Styles/header.scss";
import { Link } from "react-router-dom";

export function Header() {
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
        <Link to="/productCart">
        <img src={img3} alt="ShoppingCart" />
        </Link>
      </nav>
    </header>
  );
}
