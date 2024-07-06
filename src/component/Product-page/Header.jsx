import React from "react";
import img from "./Product-images/MagnifyingGlass.png";
import img2 from "./Product-images/UserCircle.png";
import img3 from "./Product-images/ShoppingCart.png";
import './Product-Styles/header.scss';


export function Header() {
  return (
    <header>
      <h3 className="logo">yindira</h3>
      <nav>
        <img src={img} alt="MagnifyingGlass" />
        <img src={img2} alt="UserCircle" />
        <img src={img3} alt="ShoppingCart" />
      </nav>
    </header>
  );
}
